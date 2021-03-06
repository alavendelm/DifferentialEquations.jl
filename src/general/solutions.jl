"""
`FEMSolution`

Holds the data for the solution to a finite element problem.

### Fields

* `fem_mesh::FEMmesh`: The finite element mesh the problem was solved on.
* `u::Array{Float64}`: The solution (at the final timepoint)
* `trueknown::Bool`: Boolean flag for if the true solution is given.
* `u_analytic::AbstractArrayOrVoid`: The true solution at the final timepoint.
* `errors`: A dictionary of the error calculations.
* `appxtrue::Bool`: Boolean flag for if u_analytic was an approximation.
* `timeseries`::AbstractArrayOrVoid`: u over time. Only saved if `save_timeseries=true`
  is specified in the solver.
* `t::AbstractArrayOrVoid`: All the t's in the solution. Only saved if `save_timeseries=true`
  is specified in the solver.
* `prob::DEProblem`: Holds the problem object used to define the problem.
* `save_timeseries::Bool`: True if solver saved the extra timepoints.

"""
type FEMSolution <: DESolution
  fem_mesh::FEMmesh
  u#::Array{Number}
  trueknown::Bool
  u_analytic::AbstractArrayOrVoid
  errors#::Dict{String,Float64}
  appxtrue::Bool
  timeseries#::GrowableArray
  t::AbstractArrayOrVoid
  prob::DEProblem
  save_timeseries::Bool
  function FEMSolution(fem_mesh::FEMmesh,u,u_analytic,sol,Du,timeSeries,t,prob;save_timeseries=true)
    errors = Dict(:L2=>getL2error(fem_mesh,sol,u),:H1=>getH1error(fem_mesh,Du,u),
                  :l∞=> maximum(abs.(u-u_analytic)), :l2=> norm(u-u_analytic,2))
    return(new(fem_mesh,u,true,u_analytic,errors,false,timeSeries,t,prob,true))
  end
  FEMSolution(fem_mesh,u,u_analytic,sol,Du,prob) = FEMSolution(fem_mesh::FEMmesh,u,u_analytic,sol,Du,[],[],prob,save_timeseries=false)
  function FEMSolution(fem_mesh::FEMmesh,u::AbstractArray,prob)
    return(FEMSolution(fem_mesh,u,[],[],prob,save_timeseries=false))
  end
  function FEMSolution(fem_mesh::FEMmesh,u::AbstractArray,timeseries,t,prob;save_timeseries=true)
    return(new(fem_mesh,u,false,nothing,Dict{String,Float64},false,timeseries,t,prob,save_timeseries))
  end
end

"""
`SDESolution`

Holds the data for the solution to a SDE problem.

### Fields

* `u::Array{Float64}`: The solution (at the final timepoint)
* `trueknown::Bool`: Boolean flag for if the true solution is given.
* `u_analytic::AbstractArrayOrVoid`: The true solution at the final timepoint.
* `errors`: A dictionary of the error calculations.
* `timeseries`::AbstractArrayOrVoid`: u over time. Only saved if `save_timeseries=true`
  is specified in the solver.
* `t::AbstractArrayOrVoid`: All the t's in the solution. Only saved if `save_timeseries=true`
  is specified in the solver.
* `Ws`: All of the W's in the solution. Only saved if `save_timeseries=true` is specified
  in the solver.
* `timeseries_analytic`: If `save_timeseries=true`, saves the solution at each save point.
* `prob::DEProblem`: Holds the problem object used to define the problem.
* `save_timeseries::Bool`: True if solver saved the extra timepoints.
* `appxtrue::Bool`: Boolean flag for if u_analytic was an approximation.

"""
type SDESolution <: AbstractODESolution
  u#::AbstractArrayOrNumber
  trueknown::Bool
  u_analytic#::AbstractArrayOrNumber
  errors#::Dict{}
  timeseries::AbstractArrayOrVoid
  t::AbstractArrayOrVoid
  Δt::AbstractArrayOrVoid
  Ws::AbstractArrayOrVoid
  timeseries_analytic::AbstractArrayOrVoid
  appxtrue::Bool
  save_timeseries::Bool
  maxstacksize::Int
  W
  function SDESolution(u::Union{AbstractArray,Number};timeseries=[],timeseries_analytic=[],t=[],Δt=[],Ws=[],maxstacksize=0,W=0.0)
    save_timeseries = timeseries == nothing
    trueknown = false
    return(new(u,trueknown,nothing,Dict(),timeseries,t,Δt,Ws,timeseries_analytic,false,save_timeseries,maxstacksize,W))
  end
  function SDESolution(u,u_analytic;timeseries=[],timeseries_analytic=[],t=[],Δt=nothing,Ws=[],maxstacksize=0,W=0.0)
    save_timeseries = timeseries != []
    trueknown = true
    errors = Dict(:final=>mean(abs.(u-u_analytic)))
    if save_timeseries
      errors = Dict(:final=>mean(abs.(u-u_analytic)),:l∞=>maximum(vecvecapply((x)->abs.(x),timeseries-timeseries_analytic)),:l2=>sqrt(mean(vecvecapply((x)->x.^2,timeseries-timeseries_analytic))))
    end
    return(new(u,trueknown,u_analytic,errors,timeseries,t,Δt,Ws,timeseries_analytic,false,save_timeseries,maxstacksize,W))
  end
  #Required to convert pmap results
  SDESolution(a::Any) = new(a.u,a.trueknown,a.u_analytic,a.errors,a.timeseries,a.t,a.Δt,a.Ws,a.timeseries_analytic,a.appxtrue,a.save_timeseries,a.maxstacksize,a.W)
end

"""
`ODESolution`

Holds the data for the solution to an ODE problem.

### Fields

* `u::Array{Float64}`: The solution (at the final timepoint)
* `trueknown::Bool`: Boolean flag for if the true solution is given.
* `u_analytic::AbstractArrayOrVoid`: The true solution at the final timepoint.
* `errors`: A dictionary of the error calculations.
* `timeseries`::AbstractArrayOrVoid`: u over time. Only saved if `save_timeseries=true`
  is specified in the solver.
* `t::AbstractArrayOrVoid`: All the t's in the solution. Only saved if `save_timeseries=true`
  is specified in the solver.
* `timeseries_analytic`: If `save_timeseries=true`, saves the solution at each timestep.
* `prob::DEProblem`: Holds the problem object used to define the problem.
* `save_timeseries::Bool`: True if solver saved the extra timepoints.
* `appxtrue::Bool`: Boolean flag for if u_analytic was an approximation.

"""
type ODESolution <: AbstractODESolution
  u#::AbstractArrayOrNumber
  trueknown::Bool
  u_analytic#::AbstractArrayOrNumber
  errors#::Dict{}
  timeseries::AbstractArrayOrVoid
  t::AbstractArrayOrVoid
  timeseries_analytic::AbstractArrayOrVoid
  appxtrue::Bool
  save_timeseries::Bool
  k#::uType
  prob#
  alg
  interp::Function
  dense::Bool
  sensitivity
  function ODESolution(u,prob,alg;timeseries=[],timeseries_analytic=[],t=[],k=[],saveat=[],sensitvity_res=ODELocalSensitivity())
    save_timeseries = length(timeseries) > 2
    trueknown = false
    dense = k != []
    saveat_idxs = find((x)->x∈saveat,t)
    t_nosaveat = view(t,symdiff(1:length(t),saveat_idxs))
    timeseries_nosaveat = view(timeseries,symdiff(1:length(t),saveat_idxs))
    if dense # dense
      if !prob.isinplace && typeof(u)<:AbstractArray
        f! = (t,u,du) -> (du[:] = prob.f(t,u))
      else
        f! = prob.f
      end
      interp = (tvals) -> ode_interpolation(tvals,t_nosaveat,timeseries_nosaveat,k,alg,f!)
    else
      interp = (tvals) -> nothing
    end
    return(new(u,trueknown,nothing,Dict(),timeseries,t,timeseries_analytic,false,save_timeseries,k,prob,alg,interp,dense,sensitvity_res))
  end
  function ODESolution(u,u_analytic,prob,alg;timeseries=[],timeseries_analytic=[],
           t=[],k=[],saveat=[],timeseries_errors=true,dense_errors=true,sensitvity_res=ODELocalSensitivity())
    save_timeseries = length(timeseries) > 2
    trueknown = true

    dense = length(k)>1
    saveat_idxs = find((x)->x∈saveat,t)
    t_nosaveat = view(t,symdiff(1:length(t),saveat_idxs))
    timeseries_nosaveat = view(timeseries,symdiff(1:length(t),saveat_idxs))
    if dense # dense
      if !prob.isinplace && typeof(u)<:AbstractArray
        f! = (t,u,du) -> (du[:] = prob.f(t,u))
      else
        f! = prob.f
      end
      interp = (tvals) -> ode_interpolation(tvals,t_nosaveat,timeseries_nosaveat,k,alg,f!)
    else
      interp = (tvals) -> nothing
    end

    errors = Dict{Symbol,eltype(u)}()
    errors[:final] = mean(abs.(u-u_analytic))

    if save_timeseries && timeseries_errors
      errors[:l∞] = maximum(vecvecapply((x)->abs.(x),timeseries-timeseries_analytic))
      errors[:l2] = sqrt(mean(vecvecapply((x)->float(x).^2,timeseries-timeseries_analytic)))
      if dense && dense_errors
        densetimes = collect(linspace(t[1],t[end],100))
        interp_u = interp(densetimes)
        interp_analytic = [prob.analytic(t,timeseries[1]) for t in densetimes]
        errors[:L∞] = maximum(vecvecapply((x)->abs.(x),interp_u-interp_analytic))
        errors[:L2] = sqrt(mean(vecvecapply((x)->float(x).^2,interp_u-interp_analytic)))
      end
    end
    return(new(u,trueknown,u_analytic,errors,timeseries,t,timeseries_analytic,false,save_timeseries,k,prob,alg,interp,dense,sensitvity_res))
  end
end

(sol::ODESolution)(t) = sol.interp(t)


"""
`DAESolution`

Holds the data for the solution to an ODE problem.

### Fields

* `u::Array{Float64}`: The solution (at the final timepoint)
* `trueknown::Bool`: Boolean flag for if the true solution is given.
* `u_analytic::AbstractArrayOrVoid`: The true solution at the final timepoint.
* `errors`: A dictionary of the error calculations.
* `timeseries`::AbstractArrayOrVoid`: u over time. Only saved if `save_timeseries=true`
  is specified in the solver.
* `t::AbstractArrayOrVoid`: All the t's in the solution. Only saved if `save_timeseries=true`
  is specified in the solver.
* `timeseries_analytic`: If `save_timeseries=true`, saves the solution at each timestep.
* `prob::DEProblem`: Holds the problem object used to define the problem.
* `save_timeseries::Bool`: True if solver saved the extra timepoints.
* `appxtrue::Bool`: Boolean flag for if u_analytic was an approximation.

"""
type DAESolution <: AbstractODESolution
  u#::AbstractArrayOrNumber
  du
  trueknown::Bool
  u_analytic#::AbstractArrayOrNumber
  errors#::Dict{}
  timeseries::AbstractArrayOrVoid
  timeseries_du
  t::AbstractArrayOrVoid
  timeseries_analytic::AbstractArrayOrVoid
  timeseries_du_analytic::AbstractArrayOrVoid
  appxtrue::Bool
  save_timeseries::Bool
  k#::uType
  prob#
  alg
  interp::Function
  dense::Bool
  function DAESolution(u,du,prob,alg;timeseries=[],timeseries_du=[],timeseries_analytic=[],timeseries_du_analytic=[],t=[],k=[],saveat=[])
    k = timeseries_du # Currently no reason not to, will give Hermite interpolation
    save_timeseries = timeseries == []
    trueknown = false
    dense = k != []
    #=
    saveat_idxs = find((x)->x∈saveat,t)
    t_nosaveat = view(t,symdiff(1:length(t),saveat_idxs))
    timeseries_nosaveat = view(timeseries,symdiff(1:length(t),saveat_idxs))
    =#
    if dense # dense
      if !prob.isinplace && typeof(u)<:AbstractArray
        f! = (t,u,du) -> (du[:] = prob.f(t,u))
      else
        f! = prob.f
      end
      interp = (tvals) -> ode_interpolation(tvals,t_nosaveat,timeseries_nosaveat,k,alg,f!)
    else
      interp = (tvals) -> nothing
    end
    return(new(u,du,trueknown,nothing,Dict(),timeseries,timeseries_du,t,timeseries_analytic,timeseries_du_analytic,false,save_timeseries,k,prob,alg,interp,dense))
  end
  function DAESolution(u,du,u_analytic,du_analytic,prob,alg;timeseries=[],timeseries_analytic=[],timeseries_du_analytic=[],t=[],k=[],saveat=[])
    k = timeseries_du # Currently no reason not to, will give Hermite interpolation
    save_timeseries = timeseries != []
    trueknown = true
    errors = Dict(:final=>mean(abs.(u-u_analytic)))
    if save_timeseries
      errors = Dict(:final=>mean(abs.(u-u_analytic)),:l∞=>maximum(vecvecapply((x)->abs.(x),timeseries-timeseries_analytic)),:l2=>sqrt(mean(vecvecapply((x)->float(x).^2,timeseries-timeseries_analytic))))
    end
    dense = k != []
    #=
    saveat_idxs = find((x)->x∈saveat,t)
    t_nosaveat = view(t,symdiff(1:length(t),saveat_idxs))
    timeseries_nosaveat = view(timeseries,symdiff(1:length(t),saveat_idxs))
    =#
    if dense # dense
      if !prob.isinplace && typeof(u)<:AbstractArray
        f! = (t,u,du) -> (du[:] = prob.f(t,u))
      else
        f! = prob.f
      end
      interp = (tvals) -> ode_interpolation(tvals,t_nosaveat,timeseries_nosaveat,k,alg,f!)
    else
      interp = (tvals) -> nothing
    end
    return(new(u,du,trueknown,u_analytic,du_analytic,errors,timeseries,timeseries_du,t,timeseries_analytic,timeseries_du_analytic,false,save_timeseries,k,prob,alg,interp,dense))
  end
end

"""
`StokesSolution`

Holds the data for the solution to a Stokes problem.

### Fields

* u
* v
* p
* u_analytic
* vTrue
* pTrue
* mesh
* trueknown
* errors
* converrors

"""
type StokesSolution <: DESolution
  u
  v
  p
  u_analytic
  vTrue
  pTrue
  mesh::FDMMesh
  trueknown::Bool
  errors
  converrors
  StokesSolution(u,v,p,u_analytic,vTrue,pTrue,mesh,trueknown;errors=nothing,converrors=nothing) = new(u,v,p,u_analytic,vTrue,pTrue,mesh,trueknown,errors,converrors)
end

"""
TestSolution

"""
type TestSolution
  u
  interp
  dense
end
(T::TestSolution)(t) = T.interp(t)
TestSolution(u) = TestSolution(u,nothing,false)
TestSolution(u,interp) = TestSolution(u,interp,true)
TestSolution(interp::DESolution) = TestSolution(nothing,interp,true)

"""
`appxtrue!(sol::AbstractODESolution,sol2::TestSolution)`

Uses the interpolant from the higher order solution sol2 to approximate
errors for sol. If sol2 has no interpolant, only the final error is
calculated.
"""
function appxtrue!(sol::AbstractODESolution,sol2::TestSolution)
  if sol2.u == nothing && sol2.dense
    sol2.u = sol2(sol.t[end])
  end
  errors = Dict(:final=>mean(abs.(sol.u-sol2.u)))
  if sol.save_timeseries && sol2.dense
    timeseries_analytic = sol2(sol.t)
    errors = Dict(:final=>mean(abs.(sol.u-sol2.u)),:l∞=>maximum(vecvecapply((x)->abs.(x),sol[:]-timeseries_analytic)),:l2=>sqrt(mean(vecvecapply((x)->float(x).^2,sol[:]-timeseries_analytic))))
    if !(typeof(sol) <: SDESolution) && sol.dense
      densetimes = collect(linspace(sol.t[1],sol.t[end],100))
      interp_u = sol(densetimes)
      interp_analytic = sol2(densetimes)
      interp_errors = Dict(:L∞=>maximum(vecvecapply((x)->abs.(x),interp_u-interp_analytic)),:L2=>sqrt(mean(vecvecapply((x)->float(x).^2,interp_u-interp_analytic))))
      errors = merge(errors,interp_errors)
    end
  end
  sol.u_analytic = sol2.u
  sol.errors = errors
  sol.appxtrue = true
  nothing
end

"""
`appxtrue!(sol::FEMSolution,sol2::FEMSolution)`

Adds the solution from `sol2` to the `FEMSolution` object `sol`.
Useful to add a quasi-true solution when none is known by
computing once at a very small time/space step and taking
that solution as the "true" solution
"""
function appxtrue!(sol::FEMSolution,sol2::FEMSolution)
  sol.u_analytic = sol2.u
  sol.errors = Dict(:l∞=>maximum(abs.(sol.u-sol.u_analytic)),:l2=>norm(sol.u-sol.u_analytic,2))
  sol.appxtrue = true
  nothing
end

"""
`appxtrue!(sol::AbstractODESolution,sol2::AbstractODESolution)`

Uses the interpolant from the higher order solution sol2 to approximate
errors for sol. If sol2 has no interpolant, only the final error is
calculated.
"""
function appxtrue!(sol::AbstractODESolution,sol2::AbstractODESolution)
  errors = Dict(:final=>mean(abs.(sol.u-sol2.u)))
  if sol.save_timeseries && !(typeof(sol2) <: SDESolution) && sol2.dense
    timeseries_analytic = sol2(sol.t)
    errors = Dict(:final=>mean(abs.(sol.u-sol2.u)),:l∞=>maximum(vecvecapply((x)->abs.(x),sol[:]-timeseries_analytic)),:l2=>sqrt(mean(vecvecapply((x)->float(x).^2,sol[:]-timeseries_analytic))))
    if !(typeof(sol) <: SDESolution) && sol.dense
      densetimes = collect(linspace(sol.t[1],sol.t[end],100))
      interp_u = sol(densetimes)
      interp_analytic = sol2(densetimes)
      interp_errors = Dict(:L∞=>maximum(vecvecapply((x)->abs.(x),interp_u-interp_analytic)),:L2=>sqrt(mean(vecvecapply((x)->float(x).^2,interp_u-interp_analytic))))
      errors = merge(errors,interp_errors)
    end
  end

  sol.u_analytic = sol2.u
  sol.errors = errors
  sol.appxtrue = true
  nothing
end

"""
`S = FEMSolutionTS(timeseries::Vector{uType},numvars::Int)``
`S[i][j]` => Variable i at time j.
"""
function FEMSolutionTS{uType<:AbstractArray}(timeseries::Vector{uType},numvars::Int)
  G = Vector{typeof(timeseries[1][:,1])}(0)
  push!(G,timeseries[1][:,1])
  for j = 2:length(timeseries)
    push!(G,timeseries[j][:,1])
  end
  component_timeseries = Vector{typeof(G)}(0)
  push!(component_timeseries,G)

  if numvars > 1
    for i=2:numvars
      G = Vector{typeof(timeseries[1][:,1])}(0)
      for j = 1:length(timeseries)
        push!(G,timeseries[j][:,i])
      end
      push!(component_timeseries,G)
    end
  end
  return(component_timeseries)
end

Base.length(sol::DESolution) = length(sol.t)
Base.size(sol::DESolution) = (length(sol.t),size(sol.u))
Base.endof(sol::DESolution) = length(sol)
Base.getindex(sol::DESolution,i::Int) = sol.timeseries[i]
Base.getindex(sol::DESolution,i::Int,I::Int...) = sol.timeseries[i][I...]
Base.getindex(sol::DESolution,::Colon) = sol.timeseries

function print(io::IO, sol::DESolution)
  if sol.trueknown
    str="Analytical solution is known."
  else
    str="No analytical solution is known."
  end
  println(io,"$(typeof(sol)) with $(length(sol)) timesteps. $str")
  println(io,"u: $(sol.u)")
  sol.trueknown && println(io,"errors: $(sol.errors)")
  sol.t!=[] && println(io,"t: $(sol.t)")
  sol.timeseries!=[] && println(io,"timeseries: $(sol.timeseries)")
  sol.trueknown && sol.timeseries_analytic!=[] && println(io,"timeseries_analytic: $(sol.timeseries_analytic)")
  nothing
end

function show(io::IO,sol::DESolution)
  print(io,"$(typeof(sol)), $(length(sol)) timesteps, final value $(sol.u)")
end

function vecvecapply{T<:Number,N}(f::Base.Callable,v::Vector{Array{T,N}})
  sol = Vector{eltype(eltype(v))}(0)
  for i in eachindex(v)
    for j in eachindex(v[i])
      push!(sol,v[i][j])
    end
  end
  f(sol)
end

function vecvecapply{T<:Number}(f::Base.Callable,v::Vector{T})
  f(v)
end
