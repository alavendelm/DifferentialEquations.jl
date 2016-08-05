using DifferentialEquations,Plots
prob = twoDimlinearODEExample()

## Solve and plot
println("Test getindex")
tab = constructBogakiShampine()
sol =solve(prob::ODEProblem,save_timeseries=true,alg=:ExplicitRK,adaptive=true,tableau=tab)

size(sol)
sol[1]
sol[1,2]
print(STDOUT,sol)
show(STDOUT,sol)

srand(100)
Δts = 1./2.^(10:-1:4) #14->7 good plot

prob2 = waveSDEExample()
sim = test_convergence(Δts,prob2,numMonte=Int(1e1),alg=:EM)

length(sim)
sim[1]
sim[1][1]
print(sim)
show(sim)
sim[end]

sol[1] == prob.u₀ && sol[end] == sol.u