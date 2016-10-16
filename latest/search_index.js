var documenterSearchIndex = {"docs": [

{
    "location": "index.html#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "index.html#DifferentialEquations.jl-Documentation-1",
    "page": "Home",
    "title": "DifferentialEquations.jl Documentation",
    "category": "section",
    "text": "DifferentialEquations.jl is a package for solving numerically solving differential equations in Julia by Chris Rackauckas. The purpose of this package is to supply efficient Julia implementations of solvers for various differential equations. Equations within the realm of this package include ordinary differential equations (ODEs), stochastic ordinary differential equations (SODEs or SDEs), stochastic partial differential equations (SPDEs), partial differential equations (with both finite difference and finite element methods), differential algebraic equations, and differential delay equations. It includes well-optimized implementations classic algorithms and ones from recent research, including algorithms optimized for high-precision and HPC applications. It integrates with the Julia package sphere, for example using Juno's progress meter, and wraps other differential equation solvers so that many different methods for solving the equations can be accessed by simply switching a keyword argument.All of the algorithms are thoroughly tested to ensure accuracy. Convergence tests are included in the test/ folder. The algorithms were also tested to show correctness with nontrivial behavior such as Turing morphogenesis. Example IJulia notebooks can be found in the examples folder. If you find any example where there seems to be an error, please open an issue.If you have any questions, or just want to chat about solvers/using the package, please feel free to message me in the Gitter channel. For bug reports, feature requests, etc., please submit an issue. If you're interested in contributing, please see the Contributor's Guide."
},

{
    "location": "index.html#Using-the-Package-1",
    "page": "Home",
    "title": "Using the Package",
    "category": "section",
    "text": "To install the package, use the following command inside the Julia REPL:Pkg.add(\"DifferentialEquations\")For all of the latest features, switch to the master branch via:Pkg.checkout(\"DifferentialEquations\")To load the package, use the command:using DifferentialEquationsTo understand the package in more detail, check out the following tutorials in the manual. Examples IJulia notebooks using DifferentialEquations can be found in the examples folder. Codes for the latest features can be found in test/.For the most up to date on using the package information, please contact me via the repository Gitter or read the latest documentation"
},

{
    "location": "index.html#Supported-Equations-1",
    "page": "Home",
    "title": "Supported Equations",
    "category": "section",
    "text": "For PDEs, one can optionally specify a noise equation. The solvers currently have stochastic variants for handling Gaussian Space-time white noise SPDEs.ODEs\nSODEs\n(Stochastic) PDEs\nLinear Poisson Equation\nSemi-linear Poisson Equation\nLinear Heat Equation\nSemi-linear Heat Equation (aka Reaction-Diffusion Equation)\nStationary Stokes Equation"
},

{
    "location": "index.html#Implemented-Solvers-1",
    "page": "Home",
    "title": "Implemented Solvers",
    "category": "section",
    "text": "For help with choosing a solver algorithm, please see the solver options pages.For PDEs, [method] denotes an additional version for handling stochastic partial differential equations. SDE solvers and ODE solvers take in general sized inputs. For example, if u₀ is a matrix (and your problem functions are designed to work with matrices), then the solver will use the matrices without error.ODEs\nOptimized Explicit Runge-Kutta Methods\nEuler - The Order 1 Euler Method\nMidpoint - The Order 2 Midpoint Method\nRK4 - The classic Runge-Kutta Order 4 Method\nBS3 - Bogacki-Shampine 3/2\nDP5 - Dormand-Prince 5/4\nTsit5 - Tsitouras 5/4\nBS5 - Bogacki-Shampine 5/4\nVern6 - Verner's \"Most Efficient\" 6/5\nVern7 - Verner's \"Most Efficient\" 7/6\nTanYam7 - Tanaka-Yamashita 7\nDP8 - Hairer's 8/5/3 adaption of the Dormand-Prince 8 method\nVern8 - Verner's \"Most Efficient\" 8/7\nTsitPap8 - Tsitouras-Papakostas 8/7\nVern9 - Verner's \"Most Efficient\" 9/8\nFeagin10 - Feagin's Order 10/8 Method\nFeagin12 - Feagin's Order 12/10 Method\nFeagin14 - Feagin's Order 14/12 Method\nGeneral Explicit (Adaptive) Runge-Kutta Methods\nThese solvers are defined by tableaus. For a list of pre-defined tableaus, see the ODE Solver options.\nStiff Solvers. Requires NLsolve.jl. See Conditional Dependencies.\nImplicit Euler\nTrapezoidal\nRosenbrock23 (L-Stable)\nRosenbrock32 (A-Stable)\nWrappers for ODEInterface.jl. See Conditional Dependencies.\ndorpi5 - Hairer's DP5(4)\ndop853 - Hairer's DP8(5,3)\nodex - Extrapolation algorithm based on explicit midpoint rule\nradau5 - Implicit Runge-Kutta order 5\nradau - Implicit Runge-Kutta variable order 5-13\nseulex - Extrapolation based on linear implicit Euler\nWrappers for ODE.jl. See Conditional Dependencies.\node23 - Bogacki-Shampine's method\node45 - Dormand-Prince  4/5\node78 - Runge-Kutta-Fehlberg  7/8\node23s - Rosenbrock method 2/3\node1 - Forward Euler\nmidpoint - Midpoint method\node2_heun - Huen's method\node4 - RK4\node45_fe - Runge-Kutta-Fehlberg 4/5\nWrappers for Sundials.jl. See Conditional Dependences.\ncvode_BDF - The Lawrence Livermore CVODE BDF solver.\ncvode_Adams - The Lawrence Livermore CVODE BDF solver Adams-Moulton solver.SODEs\nEuler-Maruyama\nMilstein\nRossler-SRKFinite Element Solvers (Stochastic) PDEs\nSemilinear Poisson Equation\nSee implicit solvers\nSemilinear Heat Equation (Reaction-Diffusion)\nForward Euler [Maruyama]\nBackward Euler [Maruyama]\nSemi-implicit Crank-Nicholson [Maruyama]\nSemi-implicit Backward Euler [Maruyama]\nLinear Heat Equation\nForward Euler [Maruyama]\nBackward Euler [Maruyama]\nCrank-Nicholson [Maruyama]Implicit Solvers\nDirect\nFactorizations (LU, Cholesky, QR, SVD)\nConjugate-Gradient (CG)\nGMRES"
},

{
    "location": "index.html#Roadmap-1",
    "page": "Home",
    "title": "Roadmap",
    "category": "section",
    "text": "ODE Solvers\nStabilized stiff - ROCK2 and ROCK4\nSODE Solvers\nAdaptive-SRK\nFinite difference solvers\nSemi-linear Heat Equation (Reaction-Diffusion Equation)\nSemi-linear Poisson Equation\nWave Equation\nTransport Equation\nStochastic PDE Solvers\nImplicit Integration Factor (IIF) Maruyama\nImplicit Integration Factor (IIF) Milstein\nDDE Solvers\nWrap RETARD and RADAR5\nImplement standard Runge-Kutta DDE solvers\nAlgebraic differential equations\nImplement standard solvers and add to ODEProblem type\nLinear Solvers\nFinite Difference Geometric Multigrids\nAlgebraic Multigrids via pyAMG\nPerformance\nImprove FEM performance\nTest ParallelAccelerator.jl on solvers\nAdd Xeon Phi / GPU variants\nMisc\nDavie-Gaines convergence analysis\nImprove MonteCarloSimulation"
},

{
    "location": "index.html#IJulia-Notebook-Tutorials-1",
    "page": "Home",
    "title": "IJulia Notebook Tutorials",
    "category": "section",
    "text": "If you have IJulia installed, you can access extra tutorials in the supplied IJulia notebooks via:using IJulia\nnotebook(dir = Pkg.dir(\"DifferentialEquations\")*\"/examples\")Otherwise, these notebooks can be viewed via the Github repository (note that Github renders them slightly incorrectly, so it will look better in IJulia!)."
},

{
    "location": "index.html#Tutorials-1",
    "page": "Home",
    "title": "Tutorials",
    "category": "section",
    "text": "The following tutorials will introduce you to the functionality of DifferentialEquations.jl More examples can be found by checking out the IJulia notebooks in the examples folder.Pages = [\n    \"tutorials/ode_example.md\",\n    \"tutorials/sde_example.md\",\n    \"tutorials/fempoisson_example.md\",\n    \"tutorials/femheat_example.md\",\n    \"tutorials/femstochastic_example.md\"\n    ]\nDepth = 2"
},

{
    "location": "index.html#Solver-Options-1",
    "page": "Home",
    "title": "Solver Options",
    "category": "section",
    "text": "These pages describe the options available in the solvers.Pages = [\n  \"solvers/ode_solve.md\",\n  \"solvers/sde_solve.md\",\n  \"solvers/fempoisson_solve.md\",\n  \"solvers/femheat_solve.md\",\n  \"solvers/fdmstokes_solve.md\"\n]\nDepth = 2"
},

{
    "location": "index.html#Manual-1",
    "page": "Home",
    "title": "Manual",
    "category": "section",
    "text": "Pages = [\n    \"man/overview.md\",\n    \"man/ODEProblem.md\",\n    \"man/SDEProblem.md\",\n    \"man/FEMProblem.md\",\n    \"man/StokesProblem.md\",\n    \"man/mesh.md\",\n    \"man/solution.md\",\n    \"man/output_specification.md\",\n    \"man/callback_functions.md\",\n    \"man/plot.md\",\n    \"man/function_definition_macros.md\",\n    \"man/benchmarks.md\",\n    \"man/convergence.md\",\n    \"man/conditional_dependencies.md\",\n    \"man/progress_bar.md\"\n]\nDepth = 2"
},

{
    "location": "index.html#Internal-Documentation-1",
    "page": "Home",
    "title": "Internal Documentation",
    "category": "section",
    "text": "Pages = [\n  \"internals/contributors_guide.md\",\n  \"internals/fem_tools.md\",\n  \"internals/extras.md\",\n  \"internals/solver_helpers.md\",\n  \"internals/notes_on_algorithms.md\"\n]\nDepth = 2"
},

{
    "location": "index.html#Index-1",
    "page": "Home",
    "title": "Index",
    "category": "section",
    "text": ""
},

{
    "location": "tutorials/ode_example.html#",
    "page": "Ordinary Differential Equation (ODE) Example",
    "title": "Ordinary Differential Equation (ODE) Example",
    "category": "page",
    "text": ""
},

{
    "location": "tutorials/ode_example.html#Ordinary-Differential-Equation-(ODE)-Example-1",
    "page": "Ordinary Differential Equation (ODE) Example",
    "title": "Ordinary Differential Equation (ODE) Example",
    "category": "section",
    "text": "This tutorial will introduce you to the functionality for solving ODEs. Other introductions can be found by checking out the IJulia notebooks in the examples folder.In this example we will solve the equationfracdudt = f(tu)where f(tu)=u. We know via Calculus that the solution to this equation is u(t)=uexp(t). To solve this numerically, we define a problem type by giving it the equation and the initial condition:using DifferentialEquations\nα=1\nu₀=1/2\nf(t,u) = u\nprob = ODEProblem(f,u₀)Then we setup some parameters:Δt = 1/2^(4) #The initial step size. It will automatically determined if not given.\ntspan = [0,1] # The timespan. This is the default if not given.We then send these items to the solver.sol =solve(prob::ODEProblem,tspan,Δt=Δt,alg=:Euler)To see what's in the solution object, we can print it:print(sol)\n#DifferentialEquations.ODESolution with 17 timesteps. No analytical solution is known.\n#u: 1.3189642486832998\n#t: [0.0,0.0625,0.125,0.1875,0.25,0.3125,0.375,0.4375,0.5,0.5625,0.625,0.6875,0.75,0.8125,0.875,0.9375,1.0]\n#timeseries: [0.5,0.53125,0.564453,0.599731,0.637215,0.677041,0.719356,0.764315,0.812085,0.86284,0.916768,0.974066,1.03494,1.09963,1.16836,1.24138,1.31896]We can access the 5th value of the solution withsol[5]\n#.637or get the time of the 8th timestep bysol.t[8]\n#.438The object that is returns by default acts as a continuous solution via an interpolation. We can access the interpolated values by treating sol as a function, for example:sol(0.45) # The value of the solution at t=0.45For details on more finely controlling the output, see the output specification manual pagePlotting commands are provided via a recipe to Plots.jl. To plot the solution object, simply call plot:plot(sol)If you are in Juno, this will plot to the plot pane. To open an interactive GUI (dependent on the backend), use the gui command:Plots.gui() # Opens a GUIThe plot function can be formatted using the attributes available in Plots.jl. For more of an introduction to plotting solutions, see the IJulia notebook."
},

{
    "location": "tutorials/ode_example.html#Other-Algorithms-1",
    "page": "Ordinary Differential Equation (ODE) Example",
    "title": "Other Algorithms",
    "category": "section",
    "text": "In that first example, we used alg=:Euler to set the solver to a 1st order Euler method. We can instead solve using the default method, the Dormand-Prince 4/5 method, (the same as MATLAB's ode45) by not specifying the algorithm:sol =solve(prob::ODEProblem,tspan)By default adaptive timestepping will be on, and the initial timestep will be heuristically chosen if not given. We can choose a higher order algorithm like the 7th order Verner Efficient method, turn off adaptive timestepping, and set the initial timestep to the previously set value via:sol =solve(prob::ODEProblem,tspan,Δt=Δt,alg=:Vern7,adaptive=false)\nplot(sol)(Image: Better ODE Solution)Please see the solver documentation for more algorithms and keyword arguments."
},

{
    "location": "tutorials/ode_example.html#Systems-of-Equations-1",
    "page": "Ordinary Differential Equation (ODE) Example",
    "title": "Systems of Equations",
    "category": "section",
    "text": "We can also solve systems of equations. DifferentialEquations.jl can handle any size problem, so instead of showing it for a vector, let's let u be a matrix! To do this, we simply need to have u₀ be a matrix, and define f such that it takes in a matrix and outputs a matrix. We can define a matrix of linear ODEs as follows:A = [1. 0 0 -5\n     4 -2 4 -3\n     -4 0 0 1\n     5 -2 2 3]\nu0 = rand(4,2)\nf(t,u) = A*u\nprob = ODEProblem(f,u0)Here our ODE is on a 4x2 matrix. Since we are using .*, this is 8 independent ODEs, but you can do whatever you want. To solve the ODE, we do the same steps as before.sol = solve(prob,tspan)\nplot(sol)(Image: ODE System Solution)"
},

{
    "location": "tutorials/ode_example.html#Defining-Systems-of-Equations-Eloquently-Using-@ode_define-1",
    "page": "Ordinary Differential Equation (ODE) Example",
    "title": "Defining Systems of Equations Eloquently Using @ode_define",
    "category": "section",
    "text": "To simplify your life, DifferentialEquations.jl provides the @ode_define macro for \"defining your ODE in pseudocode\" and getting a function which is efficient and runnable. For our example we will use the Lorenz system. The standard way to write this out in most mathematical programs is the following:f = (t,u,du) -> begin\n du[1] = 10.0(u[2]-u[1])\n du[2] = u[1]*(28.0-u[3]) - u[2]\n du[3] = u[1]*u[2] - (8/3)*u[3]\nendHere for more efficiency we plugged in the parameters. However, this does not look like the pretty LaTeX system we see on Wikipedia, and this might make it harder to double-check that you defined the system correctly. Using the @ode_define macro is much nicer:g = @ode_define begin\n  dx = σ*(y-x)\n  dy = x*(ρ-z) - y\n  dz = x*y - β*z\nend σ=>10. ρ=>28. β=>(8/3)DifferentialEquations.jl will automatically translate this to be exactly the same as f. The result is more legible code with no performance loss."
},

{
    "location": "tutorials/sde_example.html#",
    "page": "Stochastic Differential Equation (SDE) Example",
    "title": "Stochastic Differential Equation (SDE) Example",
    "category": "page",
    "text": ""
},

{
    "location": "tutorials/sde_example.html#Stochastic-Differential-Equation-(SDE)-Example-1",
    "page": "Stochastic Differential Equation (SDE) Example",
    "title": "Stochastic Differential Equation (SDE) Example",
    "category": "section",
    "text": "This tutorial will introduce you to the functionality for solving SDE. Other introductions can be found by checking out the IJulia notebooks in the examples folder.In this example we will solve the equationdu = f(tu)dt + (tu)dWwhere f(tu)=u and (tu)=u. We know via Stochastic Calculus that the solution to this equation is u(tW)=uexp((-frac^22)t+W). To solve this numerically, we define a problem type by giving it the equation and the initial condition:using DifferentialEquations\nα=1\nβ=1\nu₀=1/2\nf(t,u) = α*u\nσ(t,u) = β*u\nΔt = 1//2^(4) #The initial timestepping size. It will automatically assigned if not given.\ntspan = [0,1] # The timespan. This is the default if not given.For reference, let's also give the SDEProblem the analytical solution. Note that each of the problem types allow for this, but it's always optional. This can be a good way to judge how accurate the algorithms are, or is used to test convergence of the algorithms for methods developers. Thus we define the problem object with:analytic(t,u₀,W) = u₀*exp((α-(β^2)/2)*t+β*W)\nprob = SDEProblem(f,σ,u₀,analytic=analytic)and then we pass this information to the solver and plot:#We can plot using the classic Euler-Maruyama algorithm as follows:\nsol =solve(prob::SDEProblem,tspan,Δt=Δt,alg=:EM)\nplot(sol,plot_analytic=true)(Image: SDE Solution)We can choose a higher-order solver for a more accurate result:sol =solve(prob::SDEProblem,tspan,Δt=Δt,alg=:SRIW1Optimized)\nplot(sol,plot_analytic=true)(Image: Better SDE Solution)"
},

{
    "location": "tutorials/fempoisson_example.html#",
    "page": "Poisson Equation Finite Element Method Example",
    "title": "Poisson Equation Finite Element Method Example",
    "category": "page",
    "text": ""
},

{
    "location": "tutorials/fempoisson_example.html#Poisson-Equation-Finite-Element-Method-Example-1",
    "page": "Poisson Equation Finite Element Method Example",
    "title": "Poisson Equation Finite Element Method Example",
    "category": "section",
    "text": "This tutorial will introduce you to the functionality for solving a PDE. Other introductions can be found by checking out the IJulia notebooks in the examples folder.In this example we will solve the Poisson Equation u=f. For our example, we will take the linear equation where f(xy) = sin(2x)cos(2y). For this equation we know that solution is u(xyt)= sin(2x)cos(2y)(8^2) with gradient Du(xy) = cos(2x)cos(2y)(4) -sin(2x)sin(2y)(4). Thus, we define a PoissonProblem as follows:f(x) = sin(2π.*x[:,1]).*cos(2π.*x[:,2])\ngD(x) = sin(2π.*x[:,1]).*cos(2π.*x[:,2])/(8π*π)\nprob = PoissonProblem(f,gD)Or we can use the @fem_define macro to beautify our code. The first argument is the function signature, which here is (x). Second it's a list of variables to convert. This makes more sense in the Heat Equation examples, so we put in the blank expresion () for now. Then we put in our expression, and lastly we define the parameter values. @fem_define will automatically replace x by x[:,1] and y by x[:,2], and will also subtitute in the defined parameters. The previous definition using @fem_define is as follows:f  = @fem_define((x),(),begin\n  sin(α.*x).*cos(α.*y)\nend,α=>2π)\ngD = @fem_define((x),(),begin\n  sin(α.*x).*cos(α.*y)/β\nend,α=>2π,β=>8π*π)The linebreaks are not required but I think it makes it more legible!Here we chose the dirichlet boundary condition gD to give the theoretical solution.  Other example problems can be found in src/examples/exampleProblems.jl. To solve this problem, we first have to generate a mesh. Here we will simply generate a mesh of triangles on the square [0,1]x[0,1] with Δx=2^(-5). To do so, we use the code:Δx = 1//2^(5)\nfem_mesh = notime_squaremesh([0 1 0 1],Δx,:dirichlet)Note that by specifying :dirichlet our boundary conditions is set on all boundaries to dirichlet. This gives an FEMmesh object which stores a finite element mesh in the same layout as iFEM. Notice this code shows that the package supports the use of rationals in meshes. Other numbers such as floating point and integers can be used as well. Finally, to solve the equation we usesol = solve(fem_mesh,pdeProb)solve takes in a mesh and a PoissonProblem and uses the solver to compute the solution. Here the solver was chosen to be GMRES. Other solvers can be found in the documentation. This returns a FEMSolution object which holds data about the solution, such as the solution values (u). To plot the solution, we use the commandplot(sol::FEMSolution)\nPlots.gui()Here is the plot shown against the analytical solution to show the accuracy:(Image: Poisson Example Solution)"
},

{
    "location": "tutorials/femheat_example.html#",
    "page": "Heat Equation Finite Element Method Example",
    "title": "Heat Equation Finite Element Method Example",
    "category": "page",
    "text": ""
},

{
    "location": "tutorials/femheat_example.html#Heat-Equation-Finite-Element-Method-Example-1",
    "page": "Heat Equation Finite Element Method Example",
    "title": "Heat Equation Finite Element Method Example",
    "category": "section",
    "text": "This tutorial will introduce you to the functionality for solving a PDE. Other introductions can be found by checking out the IJulia notebooks in the examples folder.In this example we will solve the heat equation u_t=u+f. To do this, we define a HeatProblem which contains the function f and the boundary conditions. We specify one as follows:f(t,x,u)  = ones(size(x,1)) - .5u\nu₀(x) = zeros(size(x,1))\nprob = HeatProblem(u₀,f)Here the equation we chose was nonlinear since f depends on the variable u. Thus we specify f=f(u,x,t). If f did not depend on u, then we would specify f=f(x,t). We do need to specify gD (the dirichlet boundary condition) and gN (the neumann boundary condition) since both are zero. u_0 specifies the initial condition. These together give a HeatProblem object which holds everything which specifies a Heat Equation Problem.We then generate a mesh. We will solve the equation on the parabolic cylinder 01^2 times 01. You can think of this as the cube, or at every time point from 0 to 1, the domain is the unit square. To generate this mesh, we use the commandT = 1\nΔx = 1//2^(3)\nΔt = 1//2^(7)\nfem_mesh = parabolic_squaremesh([0 1 0 1],Δx,Δt,T,:neumann)We then call the solversol = solve(fem_mesh::FEMmesh,prob::HeatProblem,alg=:Euler)Here we have chosen to use the Euler algorithm to solve the equation. Other algorithms and their descriptions can be found in the solvers part of the documentation."
},

{
    "location": "tutorials/femstochastic_example.html#",
    "page": "Stochastic Finite Element Examples",
    "title": "Stochastic Finite Element Examples",
    "category": "page",
    "text": ""
},

{
    "location": "tutorials/femstochastic_example.html#Stochastic-Finite-Element-Examples-1",
    "page": "Stochastic Finite Element Examples",
    "title": "Stochastic Finite Element Examples",
    "category": "section",
    "text": "This tutorial will introduce you to the functionality for solving SPDEs. Other introductions can be found by checking out the IJulia notebooks in the examples folder.For most PDE problem types, we can additionally specify them as a stochastic problem by giving the appropriate optional arguments to the constructor. These arguments are a function σ which is the function multiplied to the Brownian increments dW, and stochastic, a boolean which we put as true for when the equation is stochastic. Another keyword that is optional is noisetype which specifies the type of noise (the \"color\" of the noise). By default this is Gaussian (Space-time) White Noise.The following examples show how to change the tutorial problems into stochastic problems."
},

{
    "location": "tutorials/femstochastic_example.html#Finite-Element-Stochastic-Poisson-Equation-1",
    "page": "Stochastic Finite Element Examples",
    "title": "Finite Element Stochastic Poisson Equation",
    "category": "section",
    "text": "We can solve the same PDE as in the Poisson Tutorial except as the stochastic PDE,  -u=f+gdW, with additive space-time white noise by specifying the problem as:f(x) = sin(2π.*x[:,1]).*cos(2π.*x[:,2])\nσ(x) = 5 #Additive noise\nprob = PoissonProblem(f,σ=σ)\nsolve(prob)This gives the following plot (with adding the deterministic solution from the previous example):(Image: Stochastic Poisson Example Solution)"
},

{
    "location": "tutorials/femstochastic_example.html#Finite-Element-Stochastic-Heat-Equation-1",
    "page": "Stochastic Finite Element Examples",
    "title": "Finite Element Stochastic Heat Equation",
    "category": "section",
    "text": "This will solve a nonlinear stochastic heat equation u_t=Δu+f+gdW with forcing function f(u)=.5-u, noise function g(u)=100u^2 and initial condition u0=0. We would expect this system to rise towards the deterministic steady state u=2 (but stay in mean a bit below it due to 1st order \"Milstein\" effects), gaining more noise as it increases. This is specified as follows:f(t,x,u)  = ones(size(x,1)) - .5u\nu₀(x) = zeros(size(x,1))\nσ(t,x,u) = 1u.^2\nprob = HeatProblem(u₀,f,σ=σ)We use the following code create an animation of the solution:T = 5\nΔx = 1//2^(3)\nΔt = 1//2^(11)\nfem_mesh = parabolic_squaremesh([0 1 0 1],Δx,Δt,T,:neumann)\n\nsol = solve(fem_mesh::FEMmesh,prob::HeatProblem,alg=:Euler,save_timeseries=true,solver=:LU)\nanimate(sol::FEMSolution;zlim=(0,3),cbar=false)(Image: Stochastic Heat Solution)"
},

{
    "location": "solvers/ode_solve.html#",
    "page": "Ordinary Differential Equation Solvers",
    "title": "Ordinary Differential Equation Solvers",
    "category": "page",
    "text": ""
},

{
    "location": "solvers/ode_solve.html#DifferentialEquations.solve-Tuple{DifferentialEquations.ODEProblem,AbstractArray}",
    "page": "Ordinary Differential Equation Solvers",
    "title": "DifferentialEquations.solve",
    "category": "Method",
    "text": "solve(prob::ODEProblem,tspan)\n\nSolves the ODE defined by prob on the interval tspan. If not given, tspan defaults to [0,1].\n\nKeyword Arguments\n\nΔt: Sets the initial stepsize. Defaults to an automatic choice.\nsave_timeseries: Saves the result at every timeseries_steps steps. Default is true.\ntimeseries_steps: Denotes how many steps between saving a value for the timeseries. Defaults to 1.\ntableau: The tableau for an :ExplicitRK algorithm. Defaults to a Dormand-Prince 4/5 method.\nadaptive - Turns on adaptive timestepping for appropriate methods. Default is true.\nγ - The risk-factor γ in the q equation for adaptive timestepping. Default is .9.\ntimechoicealg - Chooses the method which is used for making the adaptive timestep choices. Default is :Lund for Lund stabilization (PI stepsize control). The other option is :Simple for the standard simple error-based rejection\nβ - The Lund stabilization β parameter. Defaults are algorithm-dependent.\nqmax - Defines the maximum value possible for the adaptive q. Default is 10.\nabstol - Absolute tolerance in adaptive timestepping. Defaults to 1e-3.\nreltol - Relative tolerance in adaptive timestepping. Defaults to 1e-6.\nmaxiters - Maximum number of iterations before stopping. Defaults to 1e9.\nΔtmax - Maximum Δt for adaptive timestepping. Defaults to half the timespan.\nΔtmin - Minimum Δt for adaptive timestepping. Defaults to 1e-10.\nautodiff - Turns on/off the use of autodifferentiation (via ForwardDiff) in the implicit solvers which use NLsolve. Default is true.\ninternalnorm - The norm for which error estimates are calculated. Default is 2.\nprogressbar - Turns on/off the Juno progressbar. Defualt is false.\nprogress_steps - Numbers of steps between updates of the progress bar. Default is 1000.\nalg: The solver algorithm. Defult is :DP5. Note that any keyword argument available in the external solvers are accessible via keyword arguemnts. For example, for the ODEInterface.jl algorithms, one can specify SSBETA=0.03 as a keyword argument and it will do as it states in the ODEInterface.jl documentation. Common options such as MAXSS (max stepsize) are aliased to one can use the DifferentialEquations.jl syntax Δtmax or MAXSS. The possibilities for the solvers are:\n\nFor a full list of algorithms, please see the solver documentation.\n\n\n\n"
},

{
    "location": "solvers/ode_solve.html#Ordinary-Differential-Equation-Solvers-1",
    "page": "Ordinary Differential Equation Solvers",
    "title": "Ordinary Differential Equation Solvers",
    "category": "section",
    "text": "solve(::ODEProblem,::AbstractArray)"
},

{
    "location": "solvers/ode_solve.html#Recommended-Methods-1",
    "page": "Ordinary Differential Equation Solvers",
    "title": "Recommended Methods",
    "category": "section",
    "text": "Currently, over 100 algorithm choices are available. This guide is to help you choose the right one."
},

{
    "location": "solvers/ode_solve.html#Non-Stiff-Problems-1",
    "page": "Ordinary Differential Equation Solvers",
    "title": "Non-Stiff Problems",
    "category": "section",
    "text": "For non-stiff problems, the native DifferentialEquations.jl algorithms are vastly more efficient than the other choices (ODEInterface and ODE.jl). For most non-stiff problems, we recommend :DP5 (this is the default algorithm). When more robust error control is required, :BS5 is a good choice. For fast solving at lower tolerances, we recommend :BS3. For tolerances which are at about the truncation error of Float64 (1e-16), we recommend :DP8 as a robust choice and :Vern6, :Vern7, or :Vern8 as an efficient choice.For high accuracy non-stiff solving, we recommend the :Feagin12 or :Feagin14 methods. These are more robust than Adams-Bashforth methods to discontinuities and achieve very high precision, and are much more efficient than the extrapolation methods. Note that the Feagin methods are the only high-order optimized methods which do not include a high-order interpolant (they do include a 3rd order Hermite interpolation if needed). If a high-order method is needed with a high order interpolant, then you should choose :Vern9 which is Order 9 with an Order 9 interpolant."
},

{
    "location": "solvers/ode_solve.html#Stiff-Problems-1",
    "page": "Ordinary Differential Equation Solvers",
    "title": "Stiff Problems",
    "category": "section",
    "text": "For mildly stiff problems which are not oscillatory, :Rosenbrock32 is a good choice. If there exist large oscillations, then this form (local extrapolated) is not L-stable, and thus it is recommended that you use :Rosenbrock23 which is L-stable (but Order 2 instead of 3). As a native DifferentialEquations.jl solver, Julia-defined numbers will work. This method uses ForwardDiff to automatically guess the Jacobian. For faster solving when the Jacobian is known, use radau. For highly stiff problems where Julia-defined numbers need to be used (SIUnits, Arbs), :Trapezoid is the current best choice. However, for the most efficient highly stiff solvers, use :radau or :cvode_BDF provided by wrappers to the ODEInterface and Sundials packages respectively (see the conditional dependencies documentation)"
},

{
    "location": "solvers/ode_solve.html#Full-List-of-Methods-1",
    "page": "Ordinary Differential Equation Solvers",
    "title": "Full List of Methods",
    "category": "section",
    "text": "Choose one of these methods with the alg keyword in solve.DifferentialEquations.jlUnless otherwise specified, the DifferentialEquations algorithms all come with a 3rd order Hermite polynomial interpolation. The algorithms denoted as having a \"free\" interpolation means that no extra steps are required for the interpolation. For the non-free higher order interpolating functions, the extra steps are computed lazily (i.e. not during the solve).:Euler- The canonical forward Euler method.\n:Midpoint - The second order midpoint method.\n:RK4 - The canonical Runge-Kutta Order 4 method.\n:BS3 - Bogacki-Shampine 3/2 method.\n:DP5 - Dormand-Prince's 5/4 Runge-Kutta method. (free 4th order interpolant)\nTsit5 - Tsitouras 5/4 Runge-Kutta method. (free 4th order interpolant)\nBS5 - Bogacki-Shampine 5/4 Runge-Kutta method. (5th order interpolant)\nVern6 - Verner's \"Most Efficient\" 6/5 Runge-Kutta method. (6th order interpolant)\nVern7 - Verner's \"Most Efficient\" 7/6 Runge-Kutta method. (7th order interpolant)\nTanYam7 - Tanaka-Yamashita 7 Runge-Kutta method.\nDP8 - Hairer's 8/5/3 adaption of the Dormand-Prince 8 method Runge-Kutta method. (7th order interpolant)\nTsitPap8 - Tsitouras-Papakostas 8/7 Runge-Kutta method.\nVern8 - Verner's \"Most Efficient\" 8/7 Runge-Kutta method. (8th order interpolant)\nVern9 - Verner's \"Most Efficient\" 9/8 Runge-Kutta method. (9th order interpolant)\n:Feagin10 - Feagin's 10th-order Runge-Kutta method.\n:Feagin12 - Feagin's 12th-order Runge-Kutta method.\n:Feagin14 - Feagin's 14th-order Runge-Kutta method.\n:ExplicitRK - A general Runge-Kutta solver which takes in a tableau. Can be adaptive. Tableaus are specified via the keyword argument tab=tableau. The default tableau is for Dormand-Prince 4/5. Other supplied tableaus can be found in the Supplied Tableaus section.\n:ImplicitEuler - A 1st order implicit solver. Unconditionally stable.\n:Trapezoid - A second order unconditionally stable implicit solver. Good for highly stiff.\n:Rosenbrock23 - An Order 2/3 L-Stable fast solver which is good for mildy stiff equations with oscillations.\n:Rosenbrock32 - An Order 3/2 A-Stable fast solver which is good for mildy stiff equations without oscillations.\nODEInterface.jl\n:dopri5 - Hairer's classic implementation of the Dormand-Prince 4/5 method.\n:dop853 - Explicit Runge-Kutta 8(5,3) by Dormand-Prince\n:odex - GBS extrapolation-algorithm based on the midpoint rule\n:seulex - extrapolation-algorithm based on the linear implicit Euler method\n:radau - implicit Runge-Kutta (Radau IIA) of variable order between 5 and 13\n:radau5 - implicit Runge-Kutta method (Radau IIA) of order 5\nODE.jlThe ODE.jl algorithms all come with a 3rd order Hermite polynomial interpolation.:ode23 - Bogakai-Shampine's 2/3 method\n:ode45 - Dormand-Prince's 4/5 method\n:ode78 - Runge-Kutta-Fehlberg 7/8 method\n:ode23s - Rosenbrock's 2/3 method\n:ode1 - Forward Euler\n:ode2_midpoint - Midpoint Method\n:ode2_heun - Heun's Method\n:ode4 - RK4\n:ode45_fe - Runge-Kutta-Fehlberg 4/5 method\nSundials.jl\n:cvode_BDF - CVode Backward Differentiation Formula (BDF) solver.\n:cvode_Adams - CVode Adams-Moulton solver"
},

{
    "location": "solvers/ode_solve.html#List-of-Supplied-Tableaus-1",
    "page": "Ordinary Differential Equation Solvers",
    "title": "List of Supplied Tableaus",
    "category": "section",
    "text": "A large variety of tableaus have been supplied by default. For the most useful and common algorithms, a hand-optimized version is supplied and is recommended for general uses (i.e. use :DP5 instead of :ExplicitRK with tableau=constructDormandPrince()). However, these serve as a good method for comparing between tableaus and understanding the pros/cons of the methods. Implemented are every published tableau (that I know exist). Note that user-defined tableaus also are accepted. To see how to define a tableau, checkout the premade tableau source code. Tableau docstrings should have appropriate citations (if not, file an issue).A plot recipes is provided which will plot the stability region for a given tableau."
},

{
    "location": "solvers/ode_solve.html#Explicit-Runge-Kutta-Methods-1",
    "page": "Ordinary Differential Equation Solvers",
    "title": "Explicit Runge-Kutta Methods",
    "category": "section",
    "text": "constructEuler - Euler's 1st order method.\nconstructHuen() Huen's order 2 method.\nconstructRalston() - Ralston's order 2 method.\nconstructKutta3 - Kutta's classic 3rd order method\nconstructRK4 - The classic 4th order \"Runge-Kutta\" method\nconstructRK438Rule - The classic 4th order \"3/8th's Rule\" method\nconstructBogakiShampine3() - Bogakai-Shampine's 2/3 method.\nconstructRKF4() - Runge-Kutta-Fehlberg 3/4.\nconstructRKF5() - Runge-Kutta-Fehlberg 4/5.\nconstructRungeFirst5() - Runge's first 5th order method.\nconstructCassity5() - Cassity's 5th order method.\nconstructLawson5() - Lawson's 5th order method.\nconstructLutherKonen5 - Luther-Konen's first 5th order method.\nconstructLutherKonen52() - Luther-Konen's second 5th order method.\nconstructLutherKonen53() - Luther-Konen's third 5th order method.\nconstructPapakostasPapaGeorgiou5() - Papakostas and PapaGeorgiou more stable order 5 method.\nconstructPapakostasPapaGeorgiou52() - Papakostas and PapaGeorgiou more efficient order 5 method.\nconstructTsitouras5() - Tsitouras's order 5 method.\nconstructBogakiShampine5() - Bogaki and Shampine's Order 5 method.\nconstructSharpSmart5() - Sharp and Smart's Order 5 method.\nconstructCashKarp() - Cash-Karp method 4/5.\nconstructDormandPrince() - Dormand-Prince 4/5.\nconstructButcher6() - Butcher's first order 6 method.\nconstructButcher62() - Butcher's second order 6 method.\nconstructButcher63() - Butcher's third order 6 method.\nconstructDormandPrince6() - Dormand-Prince's 5/6 method.\nconstructSharpVerner6() Sharp-Verner's 5/6 method.\nconstructVerner916() - Verner's more efficient order 6 method (1991).\nconstructVerner9162() - Verner's second more efficient order 6 method (1991).\nconstructVernerRobust6() - Verner's \"most robust\" order 6 method.\nconstructVernerEfficient6() - Verner's \"most efficient\" order 6 method.\nconstructPapakostas6() - Papakostas's order 6 method.\nconstructLawson6() - Lawson's order 6 method.\nconstructTsitourasPapakostas6() - Tsitouras and Papakostas's order 6 method.\nconstructDormandLockyerMcCorriganPrince6() - the Dormand-Lockyer-McCorrigan-Prince order 6 method.\nconstructTanakaKasugaYamashitaYazaki6A() - Tanaka-Kasuga-Yamashita-Yazaki order 6 method A.\nconstructTanakaKasugaYamashitaYazaki6B() - Tanaka-Kasuga-Yamashita-Yazaki order 6 method B.\nconstructTanakaKasugaYamashitaYazaki6C() - Tanaka-Kasuga-Yamashita-Yazaki order 6 method C.\nconstructTanakaKasugaYamashitaYazaki6D() - Tanaka-Kasuga-Yamashita-Yazaki order 6 method D.\nconstructMikkawyEisa() - Mikkawy and Eisa's order 6 method.\nconstructChummund6() - Chummund's first order 6 method.\nconstructChummund62() - Chummund's second order 6 method.\nconstructHuta6() - Huta's first order 6 method.\nconstructHuta62() - Huta's second order 6 method.\nconstructVerner6() - An old order 6 method attributed to Verner.\nconstructDverk() - The classic DVERK algorithm attributed to Verner.\nconstructClassicVerner6() - A classic Verner order 6 algorithm (1978).\nconstructButcher7() - Butcher's order 7 algorithm.\nconstructClassicVerner7()- A classic Verner order 7 algorithm (1978).\nconstructVernerRobust7() - Verner's \"most robust\" order 7 algorithm.\nconstructTanakaYamashitaStable7() - Tanaka-Yamashita more stable order 7 algorithm.\nconstructTanakaYamashitaEfficient7() - Tanaka-Yamashita more efficient order 7 algorithm.\nconstructSharpSmart7() - Sharp-Smart's order 7 algorithm.\nconstructSharpVerner7() - Sharp-Verner's order 7 algorithm.\nconstructVerner7() - Verner's \"most efficient\" order 7 algorithm.\nconstructVernerEfficient7() - Verner's \"most efficient\" order 7 algorithm.\nconstructClassicVerner8() - A classic Verner order 8 algorithm (1978).\nconstructCooperVerner8() - Cooper-Verner's first order 8 algorithm.\nconstructCooperVerner82() - Cooper-Verner's second order 8 algorithm.\nconstructTsitourasPapakostas8() - Tsitouras-Papakostas order 8 algorithm.\nconstructdverk78() - The classic order 8 DVERK algorithm.\nconstructEnrightVerner8() - Enright-Verner order 8 algorithm.\nconstructCurtis8() - Curtis' order 8 algorithm.\nconstructVerner8() - Verner's \"most efficient\" order 8 algorithm.\nconstructRKF8() - Runge-Kutta-Fehlberg Order 7/8 method.\nconstructDormandPrice8() - Dormand-Prince Order 7/8 method.\nconstructDormandPrince8_64bit() - Dormand-Prince Order 7/8 method. Coefficients are rational approximations good for 64 bits.\nconstructVernerRobust9() - Verner's \"most robust\" order 9 method.\nconstructVernerEfficient9() - Verner's \"most efficient\" order 9 method.\nconstructSharp9() - Sharp's order 9 method.\nconstructTsitouras9() - Tsitouras's first order 9 method.\nconstructTsitouras92() - Tsitouras's second order 9 method.\nconstructCurtis10() - Curtis' order 10 method.\nconstructOno10() - Ono's order 10 method.\nconstructFeagin10Tableau() - Feagin's order 10 method.\nconstructCurtis10() - Curtis' order 10 method.\nconstructBaker10() - Baker's order 10 method.\nconstructHairer10() Hairer's order 10 method.\nconstructFeagin12Tableau() - Feagin's order 12 method.\nconstructOno12() - Ono's order 12 method.\nconstructFeagin14Tableau() Feagin's order 14 method."
},

{
    "location": "solvers/ode_solve.html#Implicit-Runge-Kutta-Methods-1",
    "page": "Ordinary Differential Equation Solvers",
    "title": "Implicit Runge-Kutta Methods",
    "category": "section",
    "text": "constructImplicitEuler - The 1st order Implicit Euler method.\nconstructMidpointRule - The 2nd order Midpoint method.\nconstructTrapezoidalRule - The 2nd order Trapezoidal rule (2nd order LobattoIIIA)\nconstructLobattoIIIA4 - The 4th order LobattoIIIA\nconstructLobattoIIIB2 - The 2nd order LobattoIIIB\nconstructLobattoIIIB4 - The 4th order LobattoIIIB\nconstructLobattoIIIC2 - The 2nd order LobattoIIIC\nconstructLobattoIIIC4 - The 4th order LobattoIIIC\nconstructLobattoIIICStar2 - The 2nd order LobattoIIIC*\nconstructLobattoIIICStar4 - The 4th order LobattoIIIC*\nconstructLobattoIIID2 - The 2nd order LobattoIIID\nconstructLobattoIIID4 - The 4th order LobattoIIID\nconstructRadauIA3 - The 3rd order RadauIA\nconstructRadauIA5 - The 5th order RadauIA\nconstructRadauIIA3 - The 3rd order RadauIIA\nconstructRadauIIA5 - The 5th order RadauIIA"
},

{
    "location": "solvers/ode_solve.html#Analysis-of-Methods-1",
    "page": "Ordinary Differential Equation Solvers",
    "title": "Analysis of Methods",
    "category": "section",
    "text": "For an in-depth walkthrough of the various method pros/cons, see notes on algorithms"
},

{
    "location": "solvers/sde_solve.html#",
    "page": "Stochastic Differential Equation Solvers",
    "title": "Stochastic Differential Equation Solvers",
    "category": "page",
    "text": ""
},

{
    "location": "solvers/sde_solve.html#DifferentialEquations.solve-Tuple{DifferentialEquations.SDEProblem,AbstractArray}",
    "page": "Stochastic Differential Equation Solvers",
    "title": "DifferentialEquations.solve",
    "category": "Method",
    "text": "solve(prob::SDEProblem,tspan)\n\nSolves the SDE as defined by prob on the time interval tspan. If not given, tspan defaults to [0,1].\n\nKeyword Arguments\n\nΔt: Sets the initial stepsize. Defaults to an automatic choice.\nsave_timeseries: Saves the result at every timeseries_steps steps. Default is true.\ntimeseries_steps: Denotes how many steps between saving a value for the timeseries. Defaults to 1.\nadaptive - Turns on adaptive timestepping for appropriate methods. Default is false.\nγ - The risk-factor γ in the q equation for adaptive timestepping. Default is 2.\nqmax - Defines the maximum value possible for the adaptive q. Default is 1.125.\nδ - The weight-factor in the error estimate. Default is 1/6.\nablstol - Absolute tolerance in adaptive timestepping. Defaults to 1e-3.\nreltol - Relative tolerance in adaptive timestepping. Defaults to 1e-6.\nmaxiters - Maximum number of iterations before stopping. Defaults to 1e9.\nΔtmax - Maximum Δt for adaptive timestepping. Defaults to half the timespan.\nΔtmin - Minimum Δt for adaptive timestepping. Defaults to 1e-10.\ninternalnorm - The norm for which error estimates are calculated. Default is 2.\nprogressbar - Turns on/off the Juno progressbar. Defualt is false.\nprogress_steps - Numbers of steps between updates of the progress bar. Default is 1000.\ndiscard_length - Size at which to discard future information in adaptive. Default is 1e-15.\ntableau: The tableau for an :SRA or :SRI algorithm. Defaults to SRIW1 or SRA1.\nadaptivealg: The adaptive timestepping algorithm. Default is :RSwm3.\nalg: String which defines the solver algorithm. Defult is \"SRIW1Optimized\". Possibilities are:\n:EM- The Euler-Maruyama method.\n:RKMil - An explicit Runge-Kutta discretization of the strong Order 1.0 Milstein method.\n:SRA - The strong Order 2.0 methods for additive SDEs due to Rossler. Not yet implemented. Default tableau is for SRA1.\n:SRI - The strong Order 1.5 methods for diagonal/scalar SDEs due to Rossler. Default tableau is for SRIW1.\n:SRIW1Optimized - An optimized version of SRIW1. Strong Order 1.5.\n:SRA1Optimized - An optimized version of SRIA1. Strong Order 2.0.\n:SRAVectorized - A vectorized implementation of SRA algorithms. Requires 1-dimensional problem.\n:SRIVectorized - A vectorized implementation of SRI algorithms. Requires 1-dimensional problem.\n\n\n\n"
},

{
    "location": "solvers/sde_solve.html#Stochastic-Differential-Equation-Solvers-1",
    "page": "Stochastic Differential Equation Solvers",
    "title": "Stochastic Differential Equation Solvers",
    "category": "section",
    "text": "solve(::SDEProblem,::AbstractArray)"
},

{
    "location": "solvers/fempoisson_solve.html#",
    "page": "Finite Element Method Poisson Equation Solvers",
    "title": "Finite Element Method Poisson Equation Solvers",
    "category": "page",
    "text": ""
},

{
    "location": "solvers/fempoisson_solve.html#DifferentialEquations.solve-Tuple{DifferentialEquations.FEMmesh,DifferentialEquations.PoissonProblem}",
    "page": "Finite Element Method Poisson Equation Solvers",
    "title": "DifferentialEquations.solve",
    "category": "Method",
    "text": "Finite Element Poisson Equation Solver\n\nsolve(fem_mesh::FEMmesh,pdeProb::PoissonProblem)\n\nTakes in a definition for the heat equation -u = f on fem_mesh with functions as defined in pdeProb. If σ is specified in pdeProb, then this solves the stochastic Poisson equation -u = f + dW.\n\nKeyword Arguments\n\nsolver = Linear solver algorithm. This is the algorithm which is chosen for solving the implicit equation Ax=b. The default is LU. The choices are:\n:Direct = Solves Ax=b using \\\n:CG = Conjugate-Gradient. Best when the space is very large and I  tMA is positive definite.\n:GMRES = GMRES. Best when the space is very large and I  tMA is not positive definite.\ntimeseries_steps = If save_timeseries=true, then this is the number of steps between the saves.\nautodiff = Whether or not autodifferentiation (as provided by AutoDiff.jl) is used for the nonlinear solving. By default autodiff is false.\nmethod = Method the nonlinear solver uses. Defaults to :trust_region.\nshow_trace = Whether to show the output of the nonlinear solver. Defaults to false.\niterations = Maximum numer of iterations in the nonlinear solver. Defaults to 1000.\n\n\n\n"
},

{
    "location": "solvers/fempoisson_solve.html#Finite-Element-Method-Poisson-Equation-Solvers-1",
    "page": "Finite Element Method Poisson Equation Solvers",
    "title": "Finite Element Method Poisson Equation Solvers",
    "category": "section",
    "text": "solve(::FEMmesh,::PoissonProblem)"
},

{
    "location": "solvers/femheat_solve.html#",
    "page": "Finite Element Method Heat Equation Solvers",
    "title": "Finite Element Method Heat Equation Solvers",
    "category": "page",
    "text": ""
},

{
    "location": "solvers/femheat_solve.html#DifferentialEquations.solve-Tuple{DifferentialEquations.FEMmesh,DifferentialEquations.HeatProblem}",
    "page": "Finite Element Method Heat Equation Solvers",
    "title": "DifferentialEquations.solve",
    "category": "Method",
    "text": "Finite Element Heat Equation Solver\n\nsolve(fem_mesh::FEMmesh,pdeProb::HeatProblem)\n\nTakes in a definition for the heat equation u_t = u + f on fem_mesh with functions as defined in pdeProb. If σ is specified in pdeProb, then this solves the stochastic heat equation u_t = u + f + dW_t.\n\nKeyword Arguments\n\nalg = Solution algorithm. Default is :Euler. The choices are:\nLinear\n:Euler (Explicit)\n:ImplicitEuler (Implicit)\n:CrankNicholson (Implicit)\nNonlinear\n:Euler (Explicit)\n:ImplicitEuler (Nonlinear Solve)\n:CrankNicholson (Nonlinear Solve)\n:SemiImplicitEuler (Implicit)\n:SemiImplicitCrankNicholson (Implicit)\n\nExplicit algorithms only require solving matrix multiplications Au. Implicit algorithms require solving the linear equation Ax=b where x is the unknown. Nonlinear Solve algorithms require solving the nonlinear equation f(x)=0 using methods like Newton's method and is provided by NLSolve.jl. Explicit algorithms have the least stability and should be used either small Δt and non-stiff equations. The implicit algorithms have better stability, but for nonlinear equations require costly nonlinear solves in order to be solved exactly. The semi-implicit algorithms discretize with part of the equation implicit and another part explicit in order to allow for the algorithm to not require a nonlinear solve, but at the cost of some stability (though still vastly better at stability than explicit algorithms).\n\nsolver = Linear solver algorithm. This is the algorithm which is chosen for solving the implicit equation Ax=b. The default is LU. The choices are:\n:Direct = Solves using \\ (no factorization). Not recommended.\n:Cholesky = Cholsky decomposition. Only stable of I  tMA is positive definite. This means that this works best when Δt is small. When applicable, this is the fastest.\n:LU = LU-Decomposition. A good mix between fast and stable.\n:QR = QR-Decomposition. Less numerical roundoff error than LU, but slightly slower.\n:SVD = SVD-Decomposition. By far the slowest, but the most robust to roundoff error.\n:CG = Conjugate-Gradient. Best when the space is very large and I  tMA is positive definite.\n:GMRES = GMRES. Best when the space is very large and I  tMA is not positive definite.\nsave_timeseries = Makes the algorithm save the output at every timeseries_steps timesteps. By default save_timeseries is false.\ntimeseries_steps = If save_timeseries=true, then this is the number of steps between the saves.\nautodiff = Whether or not autodifferentiation (as provided by AutoDiff.jl) is used for the nonlinear solving. By default autodiff is false.\nmethod = Method the nonlinear solver uses. Defaults to :trust_region.\nshow_trace = Whether to show the output of the nonlinear solver. Defaults to false.\niterations = Maximum numer of iterations in the nonlinear solver. Defaults to 1000.\nprogress_steps = The number of steps between updates of the progress bar. Defaults to 1000.\nprogressbar = Turns on/off use of the Juno progress bar. Defaults to true. Requires Juno.\n\n\n\n"
},

{
    "location": "solvers/femheat_solve.html#Finite-Element-Method-Heat-Equation-Solvers-1",
    "page": "Finite Element Method Heat Equation Solvers",
    "title": "Finite Element Method Heat Equation Solvers",
    "category": "section",
    "text": "solve(::FEMmesh,::HeatProblem)"
},

{
    "location": "solvers/fdmstokes_solve.html#",
    "page": "Finite Difference Method Stokes Equation Solvers",
    "title": "Finite Difference Method Stokes Equation Solvers",
    "category": "page",
    "text": ""
},

{
    "location": "solvers/fdmstokes_solve.html#Finite-Difference-Method-Stokes-Equation-Solvers-1",
    "page": "Finite Difference Method Stokes Equation Solvers",
    "title": "Finite Difference Method Stokes Equation Solvers",
    "category": "section",
    "text": ""
},

{
    "location": "solvers/fdmstokes_solve.html#DifferentialEquations.solve-Tuple{DifferentialEquations.StokesProblem,DifferentialEquations.FDMMesh}",
    "page": "Finite Difference Method Stokes Equation Solvers",
    "title": "DifferentialEquations.solve",
    "category": "Method",
    "text": "solve(prob::StokesProblem,mesh::FDMMesh)\n\nSolves the given stationary Stokes problem on the given finite difference mesh.\n\nKeyword Arguments\n\nconverrors: Whether to calculate all of the errors along the convergence. Default is true.\nmaxiters: Maximum number of iterations before haulting. Default is 100.\nalg: The solver algorithm. Default is \"dgs\". Other option is \"multigrid\".\nlevel: The number of levels in the Multigrid. Default is 2.\nsmoothSteps: The number of Gauss-Seidel iterations to do at each smoothing step. Default is 10.\ncoarseSteps: The number of Gauss-Seidel iterations to do at the coarsegrid. Default is 40.\ngsiters: The number of Gauss-Seidel iterations to do at each step. Default is 20.\n\n\n\n"
},

{
    "location": "solvers/fdmstokes_solve.html#Stokes-Equation-1",
    "page": "Finite Difference Method Stokes Equation Solvers",
    "title": "Stokes Equation",
    "category": "section",
    "text": "solve(::StokesProblem,::FDMMesh)"
},

{
    "location": "man/overview.html#",
    "page": "Overview of DifferentialEquations.jl Usage",
    "title": "Overview of DifferentialEquations.jl Usage",
    "category": "page",
    "text": ""
},

{
    "location": "man/overview.html#Overview-of-DifferentialEquations.jl-Usage-1",
    "page": "Overview of DifferentialEquations.jl Usage",
    "title": "Overview of DifferentialEquations.jl Usage",
    "category": "section",
    "text": "The general workflow for using the package is as follows:Define a problem\nGenerate a mesh\nUse a solver on the problem and mesh\nAnalyze the outputProblems are specified via a type interface. For example, for the Poisson equation u = f, one defines a type which holds f and the boundary condition functions. Many examples problems can be found in src/premades/premade_problems.jlNext, for PDE problems, one generates a mesh. For example, if one wants to solve the Heat equation in the parabolic cylinder of the unit square, i.e. 01^2 times 0T, then one has to discretize this. Tools within the package will generate meshes from general characteristics. For example, most tools require only specifying the general shape, Δx, Δt, and T and will generate the mesh.One then passes the mesh and the problem to the solver interface. The solver then solves the differential equation using the some numerical methods (which can be specified via keyword arguments). The solver returns a solution object which hold all of the details for the solution.With the solution object, you do the analysis as you please! For some result sol, the field sol.u returns the final solution, and if you give a true solution, sol.u_analytic is the true solution at the final time. If you specified to the solver save_timeseries=true, then sol.timeseries and sol.ts will be outputted which hold the solution/time at every timeseries_steps (default set to 100, meaning it saves an output every 100 steps).Plotting functionality is provided by a recipe to Plots.jl. To use plot solutions, simply call the plot(type) and the plotter will generate appropriate plots. If save_timeseries was used, the plotters can generate animations of the solutions to evolution equations. Plots can be customized using all of the keyword arguments provided by Plots.jl. Please see Plots.jl's documentation for more information."
},

{
    "location": "man/overview.html#Extras-for-Developers-and-Researchers-1",
    "page": "Overview of DifferentialEquations.jl Usage",
    "title": "Extras for Developers and Researchers",
    "category": "section",
    "text": "DifferentialEquations.jl also provides some helper functionality to assist with general forms of analysis. The problem types allow one to optionally specify the true solution. When this is given to the solver, the solution object returns with many error calculations. An array of solutions can be made into a ConvergenceSimulation (or the test_convergence functions can be used) which then generates all of the convergence test results and allows for plotting (great for developing new methods!). The benchmark suite allows one to compare between methods and easily plot the results. Recipes are provided for Runge-Kutta tableaus to plot stability regions."
},

{
    "location": "man/ODEProblem.html#",
    "page": "Defining an ODE Problem",
    "title": "Defining an ODE Problem",
    "category": "page",
    "text": ""
},

{
    "location": "man/ODEProblem.html#Defining-an-ODE-Problem-1",
    "page": "Defining an ODE Problem",
    "title": "Defining an ODE Problem",
    "category": "section",
    "text": "To define an ODE Problem, you simply need to give the function f and the initial condition u which define an ODEfracdudt = f(tu)f should be specified as f(t,u) (or in-place as f(t,u,du)),and u₀ should be an AbstractArray (or number) whose geometry matches the desired geometry of u. Note that we are not limited to numbers or vectors for u₀, one is allowed to provide u₀ as arbitrary matrices / higher dimension tensors as well."
},

{
    "location": "man/ODEProblem.html#DifferentialEquations.ODEProblem",
    "page": "Defining an ODE Problem",
    "title": "DifferentialEquations.ODEProblem",
    "category": "Type",
    "text": "ODEProblem\n\nWraps the data which defines an SDE problem\n\nfracdudt = f(tu)\n\nwith initial condition u.\n\nConstructors\n\nODEProblem(f,u₀;analytic=nothing) : Defines the SDE with the specified functions and defines the solution if analytic is given.\n\nFields\n\nf: The drift function in the ODE.\nu₀: The initial condition.\nanalytic: A function which describes the solution.\nknownanalytic: True if the solution is given.\nnumvars: The number of variables in the system\n\n\n\n"
},

{
    "location": "man/ODEProblem.html#Problem-Type-1",
    "page": "Defining an ODE Problem",
    "title": "Problem Type",
    "category": "section",
    "text": "DifferentialEquations.ODEProblem"
},

{
    "location": "man/ODEProblem.html#DifferentialEquations.prob_ode_linear",
    "page": "Defining an ODE Problem",
    "title": "DifferentialEquations.prob_ode_linear",
    "category": "Constant",
    "text": "Linear ODE\n\nfracdudt = u\n\nwith initial condition u=12, =101, and solution\n\nu(t) = ue^t\n\nwith Float64s\n\n\n\n"
},

{
    "location": "man/ODEProblem.html#DifferentialEquations.prob_ode_2Dlinear",
    "page": "Defining an ODE Problem",
    "title": "DifferentialEquations.prob_ode_2Dlinear",
    "category": "Constant",
    "text": "4x2 version of the Linear ODE\n\nfracdudt = u\n\nwith initial condition u=12, =101, and solution\n\nu(t) = ue^t\n\nwith Float64s\n\n\n\n"
},

{
    "location": "man/ODEProblem.html#DifferentialEquations.prob_ode_bigfloatlinear",
    "page": "Defining an ODE Problem",
    "title": "DifferentialEquations.prob_ode_bigfloatlinear",
    "category": "Constant",
    "text": "Linear ODE\n\nfracdudt = u\n\nwith initial condition u=12, =101, and solution\n\nu(t) = ue^t\n\nwith BigFloats\n\n\n\n"
},

{
    "location": "man/ODEProblem.html#DifferentialEquations.prob_ode_bigfloat2Dlinear",
    "page": "Defining an ODE Problem",
    "title": "DifferentialEquations.prob_ode_bigfloat2Dlinear",
    "category": "Constant",
    "text": "4x2 version of the Linear ODE\n\nfracdudt = u\n\nwith initial condition u=12, =101, and solution\n\nu(t) = ue^t\n\nwith BigFloats\n\n\n\n"
},

{
    "location": "man/ODEProblem.html#DifferentialEquations.prob_ode_large2Dlinear",
    "page": "Defining an ODE Problem",
    "title": "DifferentialEquations.prob_ode_large2Dlinear",
    "category": "Constant",
    "text": "100x100 version of the Linear ODE\n\nfracdudt = u\n\nwith initial condition u=12, =101, and solution\n\nu(t) = ue^t\n\nwith Float64s\n\n\n\n"
},

{
    "location": "man/ODEProblem.html#DifferentialEquations.prob_ode_2Dlinear_notinplace",
    "page": "Defining an ODE Problem",
    "title": "DifferentialEquations.prob_ode_2Dlinear_notinplace",
    "category": "Constant",
    "text": "4x2 version of the Linear ODE\n\nfracdudt = u\n\nwith initial condition u=12, =101, and solution\n\nu(t) = ue^t\n\non Float64. Purposefully not in-place as a test.\n\n\n\n"
},

{
    "location": "man/ODEProblem.html#DifferentialEquations.prob_ode_threebody",
    "page": "Defining an ODE Problem",
    "title": "DifferentialEquations.prob_ode_threebody",
    "category": "Constant",
    "text": "The ThreeBody problem as written by Hairer:\n\nbeginalign\ny = y + 2y - fracy+D - fracy-D \ny = y - 2y - fracyD - fracyD \nD = ((y+)^2 + y^2)^32 \nD = ((y-)^2+y^2)^32 \n = 0012277471 \n =1-\nendalign\n\nFrom Hairer Norsett Wanner Solving Ordinary Differential Euations I - Nonstiff Problems Page 129\n\nUsually solved on t₀ = 0.0; T = parse(BigFloat,\"17.0652165601579625588917206249\") Periodic with that setup.\n\n\n\n"
},

{
    "location": "man/ODEProblem.html#DifferentialEquations.prob_ode_pleides",
    "page": "Defining an ODE Problem",
    "title": "DifferentialEquations.prob_ode_pleides",
    "category": "Constant",
    "text": "Pleides Problem\n\nbeginalign\nx = sum_ji m(x-x)r \ny = sum_ji m(y-y)r\nendalign\n\nwhere\n\nr = ((x-x)^2 + (y-y)^2)^32\n\nand inital condtions are\n\nbeginalign\nx(0)=3  \nx(0)=3  \nx(0)=-1  \nx(0)=-3  \nx(0)=2  \nx(0)=-2  \nx(0)=2  \ny(0)=3  \ny(0)=-3  \ny(0)=2  \ny(0)=0  \ny(0)=0  \ny(0)=-4  \ny(0)=4\nendalign\n\nand with x(0)=y(0)=0 except for\n\nbeginalign\nx(0)=175 \nx(0)=-15 \ny(0)=-125 \ny(0)=1\nendalign\n\nFrom Hairer Norsett Wanner Solving Ordinary Differential Euations I - Nonstiff Problems Page 244\n\nUsually solved from 0 to 3.\n\n\n\n"
},

{
    "location": "man/ODEProblem.html#DifferentialEquations.prob_ode_vanderpol",
    "page": "Defining an ODE Problem",
    "title": "DifferentialEquations.prob_ode_vanderpol",
    "category": "Constant",
    "text": "Van der Pol Equations\n\nbeginalign\nfracdxdt = y \nfracdydt = (1-x^2)y -x\nendalign\n\nwith =10 and u=0sqrt3\n\nNon-stiff parameters.\n\n\n\n"
},

{
    "location": "man/ODEProblem.html#DifferentialEquations.prob_ode_vanderpol_stiff",
    "page": "Defining an ODE Problem",
    "title": "DifferentialEquations.prob_ode_vanderpol_stiff",
    "category": "Constant",
    "text": "Van der Pol Equations\n\nbeginalign\nfracdxdt = y \nfracdydt = (1-x^2)y -x\nendalign\n\nwith =10^6 and u=0sqrt3\n\nStiff parameters.\n\n\n\n"
},

{
    "location": "man/ODEProblem.html#DifferentialEquations.prob_ode_rober",
    "page": "Defining an ODE Problem",
    "title": "DifferentialEquations.prob_ode_rober",
    "category": "Constant",
    "text": "The Robertson biochemical reactions:\n\nbeginalign\nfracdydt = -ky+kyy  \nfracdydt =  ky-ky^2-kyy \nfracdydt =  ky^2\nendalign\n\nwhere k=004, k=3times10^7, k=10^4. For details, see:\n\nHairer Norsett Wanner Solving Ordinary Differential Euations I - Nonstiff Problems Page 129\n\nUsually solved on [0,1e11]\n\n\n\n"
},

{
    "location": "man/ODEProblem.html#DifferentialEquations.prob_ode_lorenz",
    "page": "Defining an ODE Problem",
    "title": "DifferentialEquations.prob_ode_lorenz",
    "category": "Constant",
    "text": "Lorenz Attractor\n\nbeginalign\nfracdxdt = (y-x) \nfracdydt = x(-z) - y \nfracdzdt = xy - z\nendalign\n\nwith =10, =28, =83, and inital condition u=111.\n\n\n\n"
},

{
    "location": "man/ODEProblem.html#DifferentialEquations.prob_ode_rigidbody",
    "page": "Defining an ODE Problem",
    "title": "DifferentialEquations.prob_ode_rigidbody",
    "category": "Constant",
    "text": "Rigid Body Equations\n\nbeginalign\nfracdydt  = Iyy \nfracdydt  = Iyy \nfracdydt  = Iyy\nendalign\n\nwith I=-2, I=125, and I=-12.\n\nThe initial condition is y=100009.\n\nFrom Solving Differential Equations in R by Karline Soetaert\n\nor Hairer Norsett Wanner Solving Ordinary Differential Euations I - Nonstiff Problems Page 244\n\nUsually solved from 0 to 20. Periodic at 10 and 20.\n\n\n\n"
},

{
    "location": "man/ODEProblem.html#Example-Problems-1",
    "page": "Defining an ODE Problem",
    "title": "Example Problems",
    "category": "section",
    "text": "Examples problems can be found in src/premades/premade_problems.jl.To use a sample problem, such as prob_ode_linear, you can do something like:prob = prob_ode_linear\nsol = solve(prob,[0;1])DifferentialEquations.prob_ode_linear\nDifferentialEquations.prob_ode_2Dlinear\nDifferentialEquations.prob_ode_bigfloatlinear\nDifferentialEquations.prob_ode_bigfloat2Dlinear\nDifferentialEquations.prob_ode_large2Dlinear\nDifferentialEquations.prob_ode_2Dlinear_notinplace\nDifferentialEquations.prob_ode_threebody\nDifferentialEquations.prob_ode_pleides\nDifferentialEquations.prob_ode_vanderpol\nDifferentialEquations.prob_ode_vanderpol_stiff\nDifferentialEquations.prob_ode_rober\nDifferentialEquations.prob_ode_lorenz\nDifferentialEquations.prob_ode_rigidbody"
},

{
    "location": "man/SDEProblem.html#",
    "page": "Defining a SDE Problem",
    "title": "Defining a SDE Problem",
    "category": "page",
    "text": ""
},

{
    "location": "man/SDEProblem.html#Defining-a-SDE-Problem-1",
    "page": "Defining a SDE Problem",
    "title": "Defining a SDE Problem",
    "category": "section",
    "text": "To define an SDE Problem, you simply need to give the forcing function f, the noise function σ, and the initial condition u which define an SDEdu = f(tu)dt + (tu)dWf and σ should be specified as f(t,u) and  σ(t,u) respectively, and u₀ should be an AbstractArray whose geometry matches the desired geometry of u. Note that we are not limited to numbers or vectors for u₀, one is allowed to provide u₀ as arbitrary matrices / higher dimension tensors as well. A vector of σs can also be defined to determine an SDE of higher Ito dimension."
},

{
    "location": "man/SDEProblem.html#DifferentialEquations.SDEProblem",
    "page": "Defining a SDE Problem",
    "title": "DifferentialEquations.SDEProblem",
    "category": "Type",
    "text": "SDEProblem\n\nWraps the data which defines an SDE problem\n\nu = f(ut)dt + (ut)dW\n\nwith initial condition u.\n\nConstructors\n\nSDEProblem(f,σ,u₀;analytic=nothing) : Defines the SDE with the specified functions and defines the solution if analytic is given.\n\nFields\n\nf: The drift function in the SDE.\nσ: The noise function in the SDE.\nu₀: The initial condition.\nanalytic: A function which describes the solution.\nknownanalytic: True if the solution is given.\nnumvars: The number of variables in the system\nsizeu: The size of the initial condition (and thus u)\n\n\n\n"
},

{
    "location": "man/SDEProblem.html#Problem-Type-1",
    "page": "Defining a SDE Problem",
    "title": "Problem Type",
    "category": "section",
    "text": "DifferentialEquations.SDEProblem"
},

{
    "location": "man/SDEProblem.html#DifferentialEquations.prob_sde_linear",
    "page": "Defining a SDE Problem",
    "title": "DifferentialEquations.prob_sde_linear",
    "category": "Constant",
    "text": "du_t = udt + udW_t\n\nwhere β=1.01, α=0.87, and initial condtion u₀=1/2, with solution\n\nu(tuW_t)=uexp((-frac^22)t+W_t)\n\n\n\n"
},

{
    "location": "man/SDEProblem.html#DifferentialEquations.prob_sde_2Dlinear",
    "page": "Defining a SDE Problem",
    "title": "DifferentialEquations.prob_sde_2Dlinear",
    "category": "Constant",
    "text": "8 linear SDEs (as a 4x2 matrix):\n\ndu_t = udt + udW_t\n\nwhere β=1.01, α=0.87, and initial condtion u₀=1/2 with solution\n\nu(tuW_t)=uexp((-frac^22)t+W_t)\n\n\n\n"
},

{
    "location": "man/SDEProblem.html#DifferentialEquations.prob_sde_wave",
    "page": "Defining a SDE Problem",
    "title": "DifferentialEquations.prob_sde_wave",
    "category": "Constant",
    "text": "du_t = -frac1100sin(u)cos^3(u)dt + frac110cos^2(u_t) dW_t\n\nand initial condition u₀=1.0 with solution\n\nu(tuW_t)=arctan(fracW_t10 + tan(u))\n\n\n\n"
},

{
    "location": "man/SDEProblem.html#DifferentialEquations.prob_sde_lorenz",
    "page": "Defining a SDE Problem",
    "title": "DifferentialEquations.prob_sde_lorenz",
    "category": "Constant",
    "text": "Lorenz Attractor with additive noise\n\nbeginalign\ndx = *(y-x)dt + dW_t \ndy = (x*(-z) - y)dt + dW_t \ndz = (x*y - *z)dt + dW_t \nendalign\n\nwith =10, =28, =83, =30 and inital condition u=111.\n\n\n\n"
},

{
    "location": "man/SDEProblem.html#DifferentialEquations.prob_sde_cubic",
    "page": "Defining a SDE Problem",
    "title": "DifferentialEquations.prob_sde_cubic",
    "category": "Constant",
    "text": "du_t = frac14u(1-u^2)dt + frac12(1-u^2)dW_t\n\nand initial condtion u₀=1/2, with solution\n\nu(tuW_t)=frac(1+u)exp(W_t)+u-1(1+u)exp(W_t)+1-u\n\n\n\n"
},

{
    "location": "man/SDEProblem.html#DifferentialEquations.prob_sde_additive",
    "page": "Defining a SDE Problem",
    "title": "DifferentialEquations.prob_sde_additive",
    "category": "Constant",
    "text": "Additive noise problem\n\nu_t = (fracsqrt1+t-frac12(1+t)u_t)dt + fracsqrt1+tdW_t\n\nand initial condition u₀=1.0 with α=0.1 and β=0.05, with solution\n\nu(tuW_t)=fracusqrt1+t + frac(t+W_t)sqrt1+t\n\n\n\n"
},

{
    "location": "man/SDEProblem.html#DifferentialEquations.prob_sde_additivesystem",
    "page": "Defining a SDE Problem",
    "title": "DifferentialEquations.prob_sde_additivesystem",
    "category": "Constant",
    "text": "A multiple dimension extension of additiveSDEExample\n\n\n\n"
},

{
    "location": "man/SDEProblem.html#Example-Problems-1",
    "page": "Defining a SDE Problem",
    "title": "Example Problems",
    "category": "section",
    "text": "Examples problems can be found in src/premades/premade_problems.jlDifferentialEquations.prob_sde_linear\nDifferentialEquations.prob_sde_2Dlinear\nDifferentialEquations.prob_sde_wave\nDifferentialEquations.prob_sde_lorenz\nDifferentialEquations.prob_sde_cubic\nDifferentialEquations.prob_sde_additive\nDifferentialEquations.prob_sde_additivesystem"
},

{
    "location": "man/FEMProblem.html#",
    "page": "Defining a FEM Problem",
    "title": "Defining a FEM Problem",
    "category": "page",
    "text": ""
},

{
    "location": "man/FEMProblem.html#Defining-a-FEM-Problem-1",
    "page": "Defining a FEM Problem",
    "title": "Defining a FEM Problem",
    "category": "section",
    "text": "Below are the definitions of the types which specify problems. Some general notes are:(t,x) vs (t,x,y): Mathematically one normally specifies equations in 2D as f(txy). However, in this code we use x as a vector. Thus you can think of x=x[:,1] and y=x[:,2]. Thus input equations are of the form f(x,t) no matter the dimension. If time is not included in the problem (for example, a Poisson equation problem), then we use f(x). An example is the equation u(xy)= sin(2x)cos(2y)(8^2) would be specified as sol(x) = sin(2π.*x[:,1]).*cos(2π.*x[:,2])/(8π*π).\nLinearity: If the equation has linear term, they are specified with functions f(t,x). If it is nonlinear, it is specified with functions f(t,x,u). The boundary conditions are always (t,x)\nStochastic: By default the equation is deterministic. For each equation, one can specify a σ term which adds a stochastic (txu)dW_t term to the equation (or with (tx)dW_t if linear, must match f). dW_t corresponds to the type of noise which is chosen. By default this is space-time Gaussian white noise."
},

{
    "location": "man/FEMProblem.html#DifferentialEquations.PoissonProblem",
    "page": "Defining a FEM Problem",
    "title": "DifferentialEquations.PoissonProblem",
    "category": "Type",
    "text": "PoissonProblem\n\nWraps the data that define a 2D linear Poisson equation problem:\n\n-u = f\n\nwith bounday conditions gD on the dirichlet boundary and gN on the neumann boundary. Linearity is determined by whether the forcing function f is a function of one variable (x) or two (u,x) (with x=[:,1] and y=[:,2]).\n\nIf they keyword σ is given, then this wraps the data that define a 2D stochastic heat equation\n\n-u = f + dW\n\nConstructors\n\nPoissonProblem(f,analytic,Du): Defines the dirichlet problem with analytical solution analytic, solution gradient Du = [u_x,u_y], and forcing function f\n\nPoissonProblem(u₀,f): Defines the problem with initial value u₀ (as a function) and f. If your initial data is a vector, wrap it as u₀(x) = vector.\n\nNote: If all functions are of (x), then the program assumes it's linear. Write your functions using the math to program syntrax translation: x = x[:,1] and y = x[:,2]. Use f=f(u,x) and σ=σ(u,x) (if specified) for nonlinear problems (with the boundary conditions still (x)). Systems of equations can be specified with u_i = u[:,i] as the ith variable. See the example problems for more help.\n\nKeyword Arguments\n\ngD = dirichlet boundary function\ngN = neumann boundary function\nσ = The function which multiplies the noise dW. By default σ=0.\nnoisetype = A string which specifies the type of noise to be generated. By default noisetype=:White for Gaussian Spacetime White Noise.\nnumvars = The number of variables in the Poisson system. Automatically calculated in many cases.\nD = Vector of diffusion coefficients. Defaults is D=ones(1,numvars).\n\n\n\n"
},

{
    "location": "man/FEMProblem.html#Poisson-Equation-Problem-1",
    "page": "Defining a FEM Problem",
    "title": "Poisson Equation Problem",
    "category": "section",
    "text": "PoissonProblem"
},

{
    "location": "man/FEMProblem.html#DifferentialEquations.HeatProblem",
    "page": "Defining a FEM Problem",
    "title": "DifferentialEquations.HeatProblem",
    "category": "Type",
    "text": "HeatProblem\n\nWraps the data that define a 2D heat equation problem:\n\nu_t = u + f\n\nwith bounday conditions gD on the dirichlet boundary and gN on the neumann boundary. Linearity is determined by whether the forcing function f is a function of two variables (t,x) or three (t,x,u) (with x=[:,1] and y=[:,2]).\n\nIf they keyword σ is given, then this wraps the data that define a 2D stochastic heat equation\n\nu_t = u + f + dW_t\n\nConstructors\n\nHeatProblem(analytic,Du,f): Defines the dirichlet problem with solution analytic, solution gradient Du = [u_x,u_y], and the forcing function f.\nHeatProblem(u₀,f): Defines the problem with initial value u₀ (as a function) and f. If your initial data is a vector, wrap it as u₀(x) = vector.\n\nNote: If all functions are of (t,x), then the program assumes it's linear. Write your functions using the math to program syntrax translation: x = x[:,1] and y = x[:,2]. Use f=f(t,x,u) and σ=σ(t,x,u) (if specified) for nonlinear problems (with the boundary conditions still (t,x)). Systems of equations can be specified with u_i = u[:,i] as the ith variable. See the example problems for more help.\n\nKeyword Arguments\n\ngD = dirichlet boundary function\ngN = neumann boundary function\nσ = The function which multiplies the noise dW. By default σ=0.\nnoisetype = A string which specifies the type of noise to be generated. By default noisetype=:White for Gaussian Spacetime White Noise.\nnumvars = Number of variables in the system. Automatically calculated from u₀ in most cases.\nD = Array which defines the diffusion coefficients. Default is D=ones(1,numvars).\n\n\n\n"
},

{
    "location": "man/FEMProblem.html#Heat-Equation-Problem-1",
    "page": "Defining a FEM Problem",
    "title": "Heat Equation Problem",
    "category": "section",
    "text": "HeatProblem"
},

{
    "location": "man/FEMProblem.html#Example-Problems-1",
    "page": "Defining a FEM Problem",
    "title": "Example Problems",
    "category": "section",
    "text": "Examples problems can be found in src/premades/premade_problems.jl"
},

{
    "location": "man/FEMProblem.html#DifferentialEquations.prob_poisson_birthdeathinteractingsystem",
    "page": "Defining a FEM Problem",
    "title": "DifferentialEquations.prob_poisson_birthdeathinteractingsystem",
    "category": "Constant",
    "text": "Nonlinear Poisson equation with f(u)=1-u2 and f(v)=5u-v and initial condition homogenous 1/2. Corresponds to the steady state of a humogenous reaction-diffusion equation with the same f.\n\n\n\n"
},

{
    "location": "man/FEMProblem.html#DifferentialEquations.prob_poisson_noisywave",
    "page": "Defining a FEM Problem",
    "title": "DifferentialEquations.prob_poisson_noisywave",
    "category": "Constant",
    "text": "Problem with deterministic solution: u(xy)= sin(2x)cos(2y)(8^2) and additive noise (xy)=5\n\n\n\n"
},

{
    "location": "man/FEMProblem.html#DifferentialEquations.prob_poisson_birthdeathsystem",
    "page": "Defining a FEM Problem",
    "title": "DifferentialEquations.prob_poisson_birthdeathsystem",
    "category": "Constant",
    "text": "Nonlinear Poisson equation with f(u)=1-u2 and f(v)=1-v and initial condition homogenous 1/2. Corresponds to the steady state of a humogenous reaction-diffusion equation with the same f.\n\n\n\n"
},

{
    "location": "man/FEMProblem.html#DifferentialEquations.prob_poisson_wave",
    "page": "Defining a FEM Problem",
    "title": "DifferentialEquations.prob_poisson_wave",
    "category": "Constant",
    "text": "Problem defined by the solution: u(xy)= sin(2x)cos(2y)(8^2)\n\n\n\n"
},

{
    "location": "man/FEMProblem.html#DifferentialEquations.prob_poisson_birthdeath",
    "page": "Defining a FEM Problem",
    "title": "DifferentialEquations.prob_poisson_birthdeath",
    "category": "Constant",
    "text": "Nonlinear Poisson equation with f(u)=1-u2. Corresponds to the steady state of a humogenous reaction-diffusion equation with the same f.\n\n\n\n"
},

{
    "location": "man/FEMProblem.html#Poisson-Equation-1",
    "page": "Defining a FEM Problem",
    "title": "Poisson Equation",
    "category": "section",
    "text": "DifferentialEquations.prob_poisson_birthdeathinteractingsystem\nDifferentialEquations.prob_poisson_noisywave\nDifferentialEquations.prob_poisson_birthdeathsystem\nDifferentialEquations.prob_poisson_wave\nDifferentialEquations.prob_poisson_birthdeath"
},

{
    "location": "man/FEMProblem.html#DifferentialEquations.prob_femheat_birthdeathsystem",
    "page": "Defining a FEM Problem",
    "title": "DifferentialEquations.prob_femheat_birthdeathsystem",
    "category": "Constant",
    "text": "Homogenous reaction-diffusion which starts at 1/2 and solves the system f(u)=1-u2 and f(v)=1-v\n\n\n\n"
},

{
    "location": "man/FEMProblem.html#DifferentialEquations.prob_femheat_birthdeathinteractingsystem",
    "page": "Defining a FEM Problem",
    "title": "DifferentialEquations.prob_femheat_birthdeathinteractingsystem",
    "category": "Constant",
    "text": "Homogenous reaction-diffusion which starts with 1/2 and solves the system f(u)=1-u2 and f(v)=5u-v\n\n\n\n"
},

{
    "location": "man/FEMProblem.html#DifferentialEquations.prob_femheat_diffuse",
    "page": "Defining a FEM Problem",
    "title": "DifferentialEquations.prob_femheat_diffuse",
    "category": "Constant",
    "text": "Example problem defined by the solution:\n\nu(xyt)=exp(-10((x-frac12)^2 + (y-frac12)^2 )-t)\n\nThis is a Gaussian centered at (frac12frac12) which diffuses over time.\n\n\n\n"
},

{
    "location": "man/FEMProblem.html#DifferentialEquations.prob_femheat_stochasticbirthdeath",
    "page": "Defining a FEM Problem",
    "title": "DifferentialEquations.prob_femheat_stochasticbirthdeath",
    "category": "Constant",
    "text": "Homogenous stochastic reaction-diffusion problem which starts with 0 and solves with f(u)=1-u2 with noise (u)=10u^2\n\n\n\n"
},

{
    "location": "man/FEMProblem.html#DifferentialEquations.prob_femheat_moving",
    "page": "Defining a FEM Problem",
    "title": "DifferentialEquations.prob_femheat_moving",
    "category": "Constant",
    "text": "Example problem defined by the solution:\n\nu(xyt)=frac110(1-exp(-100(t-frac12)^2))exp(-25((x-t+05)^2 + (y-t+05)^2))\n\nThis will have a mound which moves across the screen. Good animation test.\n\n\n\n"
},

{
    "location": "man/FEMProblem.html#DifferentialEquations.heatProblemExample_gierermeinhardt",
    "page": "Defining a FEM Problem",
    "title": "DifferentialEquations.heatProblemExample_gierermeinhardt",
    "category": "Function",
    "text": "heatProblemExample_gierermeinhardt(;a=1,α=1,D=[0.01 1.0],ubar=1,vbar=0,β=10,startNoise=0.01)\n\nThe Gierer-Meinhardt equations wtih quasi-random initial perturbations.\n\nbeginalign\nu_t = fracauv^2 + baru -u \nv_t = au^2 + barv - v\nendalign\n\nThe equation starts at the steady state\n\nbeginalign\nu_ss = fracbaru+ \nv_ss = frac u_ss^2\nendalign\n\nwith a bit of noise.\n\n\n\n"
},

{
    "location": "man/FEMProblem.html#DifferentialEquations.heatProblemExample_grayscott",
    "page": "Defining a FEM Problem",
    "title": "DifferentialEquations.heatProblemExample_grayscott",
    "category": "Function",
    "text": "heatProblemExample_grayscott(;ρ=.03,k=.062,D=[1e-3 .5e-3])\n\nThe Gray-Scott equations with quasi-random initial conditions. The reaction equations are given by:\n\nbeginalign\nu_t = uv^2 + (1-v) \nv_t = uv^2 - (+k)v\nendalign\n\n\n\n"
},

{
    "location": "man/FEMProblem.html#DifferentialEquations.prob_femheat_pure",
    "page": "Defining a FEM Problem",
    "title": "DifferentialEquations.prob_femheat_pure",
    "category": "Constant",
    "text": "Example problem which starts with a Dirac δ cenetered at (0.5,0.5) and solves with f=gD=0. This gives the Green's function solution.\n\n\n\n"
},

{
    "location": "man/FEMProblem.html#DifferentialEquations.prob_femheat_diffusionconstants",
    "page": "Defining a FEM Problem",
    "title": "DifferentialEquations.prob_femheat_diffusionconstants",
    "category": "Constant",
    "text": "Example problem which solves the homogeneous Heat equation with all mass starting at (1/2,1/2) with two different diffusion constants, D=001 and D=0001. Good animation test.\n\n\n\n"
},

{
    "location": "man/FEMProblem.html#DifferentialEquations.prob_femheat_birthdeath",
    "page": "Defining a FEM Problem",
    "title": "DifferentialEquations.prob_femheat_birthdeath",
    "category": "Constant",
    "text": "Homogenous reaction-diffusion problem which starts with 0 and solves with f(u)=1-u2\n\n\n\n"
},

{
    "location": "man/FEMProblem.html#Heat-Equation-1",
    "page": "Defining a FEM Problem",
    "title": "Heat Equation",
    "category": "section",
    "text": "DifferentialEquations.prob_femheat_birthdeathsystem\nDifferentialEquations.prob_femheat_birthdeathinteractingsystem\nDifferentialEquations.prob_femheat_diffuse\nDifferentialEquations.prob_femheat_stochasticbirthdeath\nDifferentialEquations.prob_femheat_moving\nDifferentialEquations.heatProblemExample_gierermeinhardt\nDifferentialEquations.heatProblemExample_grayscott\nDifferentialEquations.prob_femheat_pure\nDifferentialEquations.prob_femheat_diffusionconstants\nDifferentialEquations.prob_femheat_birthdeath"
},

{
    "location": "man/StokesProblem.html#",
    "page": "Defining a Stokes Problem",
    "title": "Defining a Stokes Problem",
    "category": "page",
    "text": ""
},

{
    "location": "man/StokesProblem.html#Defining-a-Stokes-Problem-1",
    "page": "Defining a Stokes Problem",
    "title": "Defining a Stokes Problem",
    "category": "section",
    "text": ""
},

{
    "location": "man/StokesProblem.html#DifferentialEquations.StokesProblem",
    "page": "Defining a Stokes Problem",
    "title": "DifferentialEquations.StokesProblem",
    "category": "Type",
    "text": "StokesProblem\n\nDefines the solution to a stationary Stokes problem:\n\n\n\nConstructors\n\nStokesProblem(f₁,f₂,g,uanalytic,vanalytic,panalytic)\n\nStokesProblem(f₁,f₂,g,ugD,vgD)\n\nFields\n\nf₁::Function\nf₂::Function\ng::Function\nugD::Function\nvgD::Function\nuanalytic::Function\nvanalytic::Function\npanalytic::Function\ntrueknown::Bool\n\n\n\n"
},

{
    "location": "man/StokesProblem.html#Problem-Type-1",
    "page": "Defining a Stokes Problem",
    "title": "Problem Type",
    "category": "section",
    "text": "DifferentialEquations.StokesProblem"
},

{
    "location": "man/StokesProblem.html#DifferentialEquations.prob_stokes_dirichletzero",
    "page": "Defining a Stokes Problem",
    "title": "DifferentialEquations.prob_stokes_dirichletzero",
    "category": "Constant",
    "text": "Example problme for solving the trivial stationary Stokes equation.\n\n\n\n"
},

{
    "location": "man/StokesProblem.html#DifferentialEquations.prob_stokes_homogenous",
    "page": "Defining a Stokes Problem",
    "title": "DifferentialEquations.prob_stokes_homogenous",
    "category": "Constant",
    "text": "Example problem for a homogeneous stationary Stokes equation.\n\n\n\n"
},

{
    "location": "man/StokesProblem.html#Example-Problems-1",
    "page": "Defining a Stokes Problem",
    "title": "Example Problems",
    "category": "section",
    "text": "Examples problems can be found in src/premades/premade_problems.jlDifferentialEquations.prob_stokes_dirichletzero\nDifferentialEquations.prob_stokes_homogenous"
},

{
    "location": "man/mesh.html#",
    "page": "Meshes",
    "title": "Meshes",
    "category": "page",
    "text": ""
},

{
    "location": "man/mesh.html#Meshes-1",
    "page": "Meshes",
    "title": "Meshes",
    "category": "section",
    "text": ""
},

{
    "location": "man/mesh.html#Mesh-Specification-1",
    "page": "Meshes",
    "title": "Mesh Specification",
    "category": "section",
    "text": "Finite element meshes are specified in the (node,elem) structure due to Long Chen. For the standard elements used in this package, we describe a geometric figure by a triangulation. The nodes are the vertices of the triangle and the elements are the triangles themselves. These are encoded as follows:Row i of node is an (xy) (or (xyz)) pair which specifies the coordinates of the ith node.\nRow j of elem are the indices of the nodes which make the triangle. Thus in 2D each row has three numbers.For example, to know the (xy) locations of the vertices of triangle j, we would see that node[elem[j,i],:] are the (xy) locations of the ith vertex for i=123.For more information, please see Programming of Finite Element Methods by Long Chen."
},

{
    "location": "man/mesh.html#DifferentialEquations.FEMmesh",
    "page": "Meshes",
    "title": "DifferentialEquations.FEMmesh",
    "category": "Type",
    "text": "FEMmesh\n\nHolds the information describing a finite element mesh. For information on how (node,elem) can be interpreted as a mesh describing a geometry, see the mesh specification documentation.\n\nFields\n\nnode: The nodes in the (node,elem) structure.\nelem: The elements in the (node,elem) structure.\nbdnode: Vector of indices for the boundary nodes.\nfreenode: Vector of indices for the free (non-dirichlet bound) nodes.\nbdedge: Indices of the edges in totaledge which are on the boundary.\nis_bdnode: Boolean which is true for nodes on the boundary.\nis_bdelem: Boolean which is true for elements on the boundary.\nbdflag: Flag which describes the type of boundary condition. 1=> dirichlet, 2=>neumann, 3=>robin.\ntotaledge: Vector of the edges.\narea: Vector which is the area for each element.\ndirichlet: Indices for the nodes on the boundary which have a dirichlet boundary condition.\nneumann: Indices for the nodes on the boundary which have a neumann boundary condition.\nrobin: Indices for the nodes on the boundary which have a robin boundary condition.\nN::Int: The number of nodes.\nNT::Int: The number of triangles (elements).\nΔx: The spatial discretization size. If non-uniform, this is the average.\nΔt: The time discretization size. If adaptive, this is the initial.\nT::Number: The end time.\nnumiters::Int: The number of iterations to go from 0 to T using Δt.\nμ: The CFL μ stability parameter.\nν: The CFL ν stability parameter.\nevolutionEq: True for a mesh which has non-trivial time components.\n\n\n\n"
},

{
    "location": "man/mesh.html#DifferentialEquations.SimpleMesh",
    "page": "Meshes",
    "title": "DifferentialEquations.SimpleMesh",
    "category": "Type",
    "text": "SimpleMesh\n\nHolds the information describing a finite element mesh. For information on how (node,elem) can be interpreted as a mesh describing a geometry, see Programming of Finite Element Methods by Long Chen.\n\nFields\n\nnode: The nodes in the (node,elem) structure.\nelem: The elements in the (node,elem) structure.\n\n\n\n"
},

{
    "location": "man/mesh.html#DifferentialEquations.Mesh",
    "page": "Meshes",
    "title": "DifferentialEquations.Mesh",
    "category": "Type",
    "text": "Mesh: An abstract type which holds a (node,elem) pair and other information for a mesh\n\n\n\n"
},

{
    "location": "man/mesh.html#Mesh-Type-1",
    "page": "Meshes",
    "title": "Mesh Type",
    "category": "section",
    "text": "DifferentialEquations.FEMmesh\nDifferentialEquations.SimpleMesh\nDifferentialEquations.Mesh"
},

{
    "location": "man/mesh.html#DifferentialEquations.findboundary",
    "page": "Meshes",
    "title": "DifferentialEquations.findboundary",
    "category": "Function",
    "text": "findboundary(elem,bdflag=[])`\n\nfindboundary(fem_mesh::FEMmesh,bdflag=[])\n\nFinds elements which are on the boundary of the domain. If bdflag is given, then those indices are added as nodes for a dirichlet boundary condition (useful for creating cracks and other cutouts of domains).\n\nReturns\n\nbdnode = Vector of indices for bdnode. Using node[:,bdnode] returns boundary nodes.\n\nbdedge = Vector of indices for boundary edges.\n\nis_bdnode = Vector of booleans size N which donotes which are on the boundary\n\nis_bdelem = Vector of booleans size NT which denotes which are on the boundary\n\n\n\n"
},

{
    "location": "man/mesh.html#DifferentialEquations.setboundary",
    "page": "Meshes",
    "title": "DifferentialEquations.setboundary",
    "category": "Function",
    "text": "setboundary(node::AbstractArray,elem::AbstractArray,bdtype)\n\nsetboundary(fem_mesh::FEMmesh,bdtype)\n\nTakes in the fem_mesh and creates an array bdflag which denotes the boundary types. 1 stands for dirichlet, 2 for neumann, 3 for robin.\n\n\n\n"
},

{
    "location": "man/mesh.html#DifferentialEquations.fem_squaremesh",
    "page": "Meshes",
    "title": "DifferentialEquations.fem_squaremesh",
    "category": "Function",
    "text": "fem_squaremesh(square,h)\n\nReturns the grid in the iFEM form of the two arrays (node,elem)\n\n\n\n"
},

{
    "location": "man/mesh.html#DifferentialEquations.notime_squaremesh",
    "page": "Meshes",
    "title": "DifferentialEquations.notime_squaremesh",
    "category": "Function",
    "text": "notime_squaremesh(square,Δx,bdtype)\n\nComputes the (node,elem) square mesh for the square with the chosen Δx and boundary settings.\n\n###Example\n\nsquare=[0 1 0 1] #Unit Square\nΔx=.25\nnotime_squaremesh(square,Δx,\"dirichlet\")\n\n\n\n"
},

{
    "location": "man/mesh.html#DifferentialEquations.parabolic_squaremesh",
    "page": "Meshes",
    "title": "DifferentialEquations.parabolic_squaremesh",
    "category": "Function",
    "text": "parabolic_squaremesh(square,Δx,Δt,T,bdtype)\n\nComputes the (node,elem) x [0,T] parabolic square mesh for the square with the chosen Δx and boundary settings and with the constant time intervals Δt.\n\n###Example\n\nsquare=[0 1 0 1] #Unit Square\nΔx=.25; Δt=.25;T=2\nparabolic_squaremesh(square,Δx,Δt,T,:dirichlet)\n\n\n\n"
},

{
    "location": "man/mesh.html#Base.size-Tuple{DifferentialEquations.FDMMesh}",
    "page": "Meshes",
    "title": "Base.size",
    "category": "Method",
    "text": "size(mesh::FDMMesh)\n\nReturns gridSize.\n\n\n\n"
},

{
    "location": "man/mesh.html#Mesh-Generation-Functions-1",
    "page": "Meshes",
    "title": "Mesh Generation Functions",
    "category": "section",
    "text": "DifferentialEquations.findboundary\nDifferentialEquations.setboundary\nDifferentialEquations.fem_squaremesh\nDifferentialEquations.notime_squaremesh\nDifferentialEquations.parabolic_squaremesh\nBase.size(::DifferentialEquations.FDMMesh)"
},

{
    "location": "man/mesh.html#DifferentialEquations.meshExample_bunny",
    "page": "Meshes",
    "title": "DifferentialEquations.meshExample_bunny",
    "category": "Function",
    "text": "meshExample_bunny() : Returns a 3D SimpleMesh.\n\n\n\n"
},

{
    "location": "man/mesh.html#DifferentialEquations.meshExample_flowpastcylindermesh",
    "page": "Meshes",
    "title": "DifferentialEquations.meshExample_flowpastcylindermesh",
    "category": "Function",
    "text": "meshExample_flowpastcylindermesh() : Returns a 2D SimpleMesh.\n\n\n\n"
},

{
    "location": "man/mesh.html#DifferentialEquations.meshExample_lakemesh",
    "page": "Meshes",
    "title": "DifferentialEquations.meshExample_lakemesh",
    "category": "Function",
    "text": "meshExample_lakemesh() : Returns a 2D SimpleMesh.\n\n\n\n"
},

{
    "location": "man/mesh.html#DifferentialEquations.meshExample_Lshapemesh",
    "page": "Meshes",
    "title": "DifferentialEquations.meshExample_Lshapemesh",
    "category": "Function",
    "text": "meshExample_Lshapemesh() : Returns a 2D SimpleMesh.\n\n\n\n"
},

{
    "location": "man/mesh.html#DifferentialEquations.meshExample_Lshapeunstructure",
    "page": "Meshes",
    "title": "DifferentialEquations.meshExample_Lshapeunstructure",
    "category": "Function",
    "text": "meshExample_Lshapeunstructure() : Returns a 2D SimpleMesh.\n\n\n\n"
},

{
    "location": "man/mesh.html#DifferentialEquations.meshExample_oilpump",
    "page": "Meshes",
    "title": "DifferentialEquations.meshExample_oilpump",
    "category": "Function",
    "text": "meshExample_oilpump() : Returns a 3D SimpleMesh.\n\n\n\n"
},

{
    "location": "man/mesh.html#DifferentialEquations.meshExample_wavymesh",
    "page": "Meshes",
    "title": "DifferentialEquations.meshExample_wavymesh",
    "category": "Function",
    "text": "meshExample_wavymesh() : Returns a 2D SimpleMesh.\n\n\n\n"
},

{
    "location": "man/mesh.html#DifferentialEquations.meshExample_wavyperturbmesh",
    "page": "Meshes",
    "title": "DifferentialEquations.meshExample_wavyperturbmesh",
    "category": "Function",
    "text": "meshExample_wavyperturbmesh() : Returns a 3D SimpleMesh.\n\n\n\n"
},

{
    "location": "man/mesh.html#Example-Meshes-1",
    "page": "Meshes",
    "title": "Example Meshes",
    "category": "section",
    "text": "DifferentialEquations.meshExample_bunny\nDifferentialEquations.meshExample_flowpastcylindermesh\nDifferentialEquations.meshExample_lakemesh\nDifferentialEquations.meshExample_Lshapemesh\nDifferentialEquations.meshExample_Lshapeunstructure\nDifferentialEquations.meshExample_oilpump\nDifferentialEquations.meshExample_wavymesh\nDifferentialEquations.meshExample_wavyperturbmesh"
},

{
    "location": "man/mesh.html#Plot-Functions-1",
    "page": "Meshes",
    "title": "Plot Functions",
    "category": "section",
    "text": "The plot functionality is provided by a Plots.jl recipe. What is plotted is a \"trisurf\" of the mesh. To plot a mesh, simply use:plot(mesh::Mesh)All of the functionality (keyword arguments) provided by Plots.jl are able to be used in this command. Please see the Plots.jl documentation for more information."
},

{
    "location": "man/solution.html#",
    "page": "The Solution Type",
    "title": "The Solution Type",
    "category": "page",
    "text": ""
},

{
    "location": "man/solution.html#The-Solution-Type-1",
    "page": "The Solution Type",
    "title": "The Solution Type",
    "category": "section",
    "text": "Each solver has an appropriate solution type. The solution type holds all of the information about the problem which was solved an its solution. If you enabled save_timeseries=true, then the solver also includes a time-course of the solution captured at every timeseries_steps steps.The solution type has a lot of built in functionality to help analysis. For example, it has an array interface for accessing the values. We can usesol[i]to access the value at timestep i (if the timeseres was saved), andsol.t[i]to access the value of t at timestep i. The final value of the simulation, which is always saved, is saved tosol.uIf the solver allows for dense output (any ODE solver) and dense=true was set for the solving (which is the default), then we can access the approximate value at a time t using the commandsol(t)If the analytical solution, we also havesol.u_analytic # final value\nsol.timeseries_analytic # timeseries of analytical solution, saved if save_timesseries == true\nsol.prob.analytic(t) # The analytic solution at time tPlotting functionality is provided for each solution type. To plot the solution, simply useplot(sol)The plotting function is implemented as a recipe to Plots.jl and as such receives all of the features of a Plots.jl plot."
},

{
    "location": "man/solution.html#DifferentialEquations.FEMSolution",
    "page": "The Solution Type",
    "title": "DifferentialEquations.FEMSolution",
    "category": "Type",
    "text": "FEMSolution\n\nHolds the data for the solution to a finite element problem.\n\nFields\n\nfem_mesh::FEMmesh: The finite element mesh the problem was solved on.\nu::Array{Float64}: The solution (at the final timepoint)\ntrueknown::Bool: Boolean flag for if the true solution is given.\nu_analytic::AbstractArrayOrVoid: The true solution at the final timepoint.\nerrors: A dictionary of the error calculations.\nappxTrue::Bool: Boolean flag for if u_analytic was an approximation.\ntimeseries::AbstractArrayOrVoid: u over time. Only saved ifsave_timeseries=true` is specified in the solver.\nt::AbstractArrayOrVoid: All the t's in the solution. Only saved if save_timeseries=true is specified in the solver.\nprob::DEProblem: Holds the problem object used to define the problem.\nsave_timeseries::Bool: True if solver saved the extra timepoints.\n\n\n\n"
},

{
    "location": "man/solution.html#DifferentialEquations.DESolution",
    "page": "The Solution Type",
    "title": "DifferentialEquations.DESolution",
    "category": "Type",
    "text": "PdeSolution: Wrapper for the objects obtained from a solver\n\n\n\n"
},

{
    "location": "man/solution.html#DifferentialEquations.SDESolution",
    "page": "The Solution Type",
    "title": "DifferentialEquations.SDESolution",
    "category": "Type",
    "text": "SDESolution\n\nHolds the data for the solution to a SDE problem.\n\nFields\n\nu::Array{Float64}: The solution (at the final timepoint)\ntrueknown::Bool: Boolean flag for if the true solution is given.\nu_analytic::AbstractArrayOrVoid: The true solution at the final timepoint.\nerrors: A dictionary of the error calculations.\ntimeseries::AbstractArrayOrVoid: u over time. Only saved ifsave_timeseries=true` is specified in the solver.\nt::AbstractArrayOrVoid: All the t's in the solution. Only saved if save_timeseries=true is specified in the solver.\nWs: All of the W's in the solution. Only saved if save_timeseries=true is specified in the solver.\ntimeseries_analytic: If save_timeseries=true, saves the solution at each save point.\nprob::DEProblem: Holds the problem object used to define the problem.\nsave_timeseries::Bool: True if solver saved the extra timepoints.\nappxTrue::Bool: Boolean flag for if u_analytic was an approximation.\n\n\n\n"
},

{
    "location": "man/solution.html#DifferentialEquations.ODESolution",
    "page": "The Solution Type",
    "title": "DifferentialEquations.ODESolution",
    "category": "Type",
    "text": "ODESolution\n\nHolds the data for the solution to an ODE problem.\n\nFields\n\nu::Array{Float64}: The solution (at the final timepoint)\ntrueknown::Bool: Boolean flag for if the true solution is given.\nu_analytic::AbstractArrayOrVoid: The true solution at the final timepoint.\nerrors: A dictionary of the error calculations.\ntimeseries::AbstractArrayOrVoid: u over time. Only saved ifsave_timeseries=true` is specified in the solver.\nt::AbstractArrayOrVoid: All the t's in the solution. Only saved if save_timeseries=true is specified in the solver.\ntimeseries_analytic: If save_timeseries=true, saves the solution at each timestep.\nprob::DEProblem: Holds the problem object used to define the problem.\nsave_timeseries::Bool: True if solver saved the extra timepoints.\nappxTrue::Bool: Boolean flag for if u_analytic was an approximation.\n\n\n\n"
},

{
    "location": "man/solution.html#DifferentialEquations.StokesSolution",
    "page": "The Solution Type",
    "title": "DifferentialEquations.StokesSolution",
    "category": "Type",
    "text": "StokesSolution\n\nHolds the data for the solution to a Stokes problem.\n\nFields\n\nu\nv\np\nu_analytic\nvTrue\npTrue\nmesh\ntrueknown\nerrors\nconverrors\n\n\n\n"
},

{
    "location": "man/solution.html#Solution-Types-1",
    "page": "The Solution Type",
    "title": "Solution Types",
    "category": "section",
    "text": "DifferentialEquations.FEMSolution\nDifferentialEquations.DESolution\nDifferentialEquations.SDESolution\nDifferentialEquations.ODESolution\nDifferentialEquations.StokesSolution"
},

{
    "location": "man/solution.html#DifferentialEquations.appxTrue!",
    "page": "The Solution Type",
    "title": "DifferentialEquations.appxTrue!",
    "category": "Function",
    "text": "appxTrue!(res,res2)\n\nAdds the solution from res2 to the FEMSolution object res. Useful to add a quasi-true solution when none is known by computing once at a very small time/space step and taking that solution as the \"true\" solution\n\n\n\n"
},

{
    "location": "man/solution.html#DifferentialEquations.FEMSolutionTS",
    "page": "The Solution Type",
    "title": "DifferentialEquations.FEMSolutionTS",
    "category": "Function",
    "text": "S = FEMSolutionTS(timeseries::Vector{uType},numvars::Int)S[i][j]` => Variable i at time j.\n\n\n\n"
},

{
    "location": "man/solution.html#Related-Functions-1",
    "page": "The Solution Type",
    "title": "Related Functions",
    "category": "section",
    "text": "DifferentialEquations.appxTrue!\nDifferentialEquations.FEMSolutionTS"
},

{
    "location": "man/output_specification.html#",
    "page": "Output Specification",
    "title": "Output Specification",
    "category": "page",
    "text": ""
},

{
    "location": "man/output_specification.html#Output-Specification-1",
    "page": "Output Specification",
    "title": "Output Specification",
    "category": "section",
    "text": "DifferentialEquations.jl allows for specifying many forms of output. The default is \"as verbose as possible\", with items saved to give a continuous interpolating function as the output for ease of use. However, all of this functionality can be toned down or turned off in order to improve performance and reduce the memory usage. This page is to describe the different techniques which can be employed to change the output specification. It will be described from the top down: the most powerful is continuous (dense) output, which can instead be used for step-wise interpolation via saveat, to using no interpolations and only save the timeseries at timeseries_steps, to finally turning save_timeseries=false to only save the value at the end."
},

{
    "location": "man/output_specification.html#Availability-1",
    "page": "Output Specification",
    "title": "Availability",
    "category": "section",
    "text": "Note that the dense and saveat functions (the functionality which involves interpolations) is currently only available for the ODE solvers. The other functionality is available with all solvers."
},

{
    "location": "man/output_specification.html#Continuous-(Dense)-Output-1",
    "page": "Output Specification",
    "title": "Continuous (Dense) Output",
    "category": "section",
    "text": "Continuous output is designated by the keyword argument dense. This is only available for the ODE solvers.  By default this is turned on with dense=true. At every timepoint it saves the appropriate derivative approximations sol.k in order to produce an interpolating function which is accessed directly by calling the solution object. For example, if sol is the solution object, the value at time t can be found viasol(t)Many of the special Runge-Kutta methods include a high-order interpolant which matches or is one less than the order of the solver. By default the other methods use an Order 3 Hermite interpolation. Since the k array must be stored, this has the highest memory requirement. Note that for methods which use extra steps for the high order interpolant that the extra steps are lazy evaluated and thus only computing when an interpolated value in the appropriate interval is requested"
},

{
    "location": "man/output_specification.html#Choosing-Intermediate-Locations-for-the-Solution-1",
    "page": "Output Specification",
    "title": "Choosing Intermediate Locations for the Solution",
    "category": "section",
    "text": "If dense solving is too high of a memory cost, one can specify values to be interpolated during the solving via the array saveat. For example, if we are solving on the interval tspan=[0,1], we can set saveat=[0.5] and the solver will ensure that an approximate value will be given at t=0.5. If this value is reached by the solver, it will be ignored. If the solver skips over this point, then an interpolated value is computed and saved for this point. This only requires saving the derivatives at two timesteps, and thus has a drastically reduced memory footprint than full dense output. Note that this, being associated with dense output, is only available for the ODE solvers.Another way to specify an output location is to add that value to tspan. For example, we can force the solver to solve at 0.5 via tspan=[0,0.5,1]. However, notice that this will require that the solver actually hits t=0.5. In some cases this can slow down the solver by lowering the Δt leading to extra steps. In some cases, this may be advantagous. For example, if you know that there is a large discontinuity at t=0.5, using tspan=[0,0.5,1] will force the solver to first solve on [0,0.5], and then continue to solve on [0.5,1]. This will give a much better approximation by perfectly specifying the moment of discontinuity, and can help the solver through tough regions."
},

{
    "location": "man/output_specification.html#Manually-Turning-on-the-Calculation-1",
    "page": "Output Specification",
    "title": "Manually Turning on the Calculation",
    "category": "section",
    "text": "The dense output storage can be turned on even if saveat and dense are not being used by setting calck=true. This can be useful for event handling since this will allow one to do the interpolations in the event even if you aren't saving the information for continuous dense output"
},

{
    "location": "man/output_specification.html#Timeseries-Specifications-1",
    "page": "Output Specification",
    "title": "Timeseries Specifications",
    "category": "section",
    "text": "To further reduce the memory usage, we can control the density that the timeseries is saved at. By default timeseries_steps=1, meaning that every step is saved. Note that timeseries_steps=1 is required for dense output to work correctly. If we change this value to timeseries_steps=n, then every nth step will be saved. Note that it will always have the first and final steps. We can turn off the saving of intermediate steps completely via the keyword save_timeseries=false. This can be used to minimize the memory usage."
},

{
    "location": "man/callback_functions.html#",
    "page": "Event Handling and Callback Functions",
    "title": "Event Handling and Callback Functions",
    "category": "page",
    "text": ""
},

{
    "location": "man/callback_functions.html#Event-Handling-and-Callback-Functions-1",
    "page": "Event Handling and Callback Functions",
    "title": "Event Handling and Callback Functions",
    "category": "section",
    "text": ""
},

{
    "location": "man/callback_functions.html#Introduction-to-Callback-Function-1",
    "page": "Event Handling and Callback Functions",
    "title": "Introduction to Callback Function",
    "category": "section",
    "text": "DifferentialEquations.jl allows for using callback functions to inject user code into the solver algorithms. This is done by defining a callback function and passing that function to the solver. After each accepted iteration this function is called. The standard callback is defined as:default_callback = @ode_callback begin\n  @ode_savevalues\nendThis runs the saving routine at every timestep (inside of this saving routine it   checks the iterations vs timeseries_steps etc., so it's quite complicated).   However, you can add any code you want to this callback. For example, we can   make it print the value at each timestep by doing:my_callback = @ode_callback begin\n  println(u)\n  @ode_savevalues\nendand pass this to the solver:sol = solve(prob,tspan,callback=my_callback)Later in the manual the full API for callbacks is given (the callbacks are very   general and thus the full API is complex enough to handle just about anything),   but for most users it's recommended that you use the simplified event handling   DSL described below."
},

{
    "location": "man/callback_functions.html#Event-Handling-1",
    "page": "Event Handling and Callback Functions",
    "title": "Event Handling",
    "category": "section",
    "text": "Since event handling is a very common issue, a special domain-specific language (DSL) was created to make event handling callbacks simple to define."
},

{
    "location": "man/callback_functions.html#Example-1:-Bouncing-Ball-1",
    "page": "Event Handling and Callback Functions",
    "title": "Example 1: Bouncing Ball",
    "category": "section",
    "text": "First let's look at the bouncing ball. @ode_def from ParameterizedFunctions.jl was to define the problem, where the first variable y is the height which changes by v the velocity, where the velocity is always changing at -g where is the gravitational constant. This is the equation:f = @ode_def BallBounce begin\n  dy =  v\n  dv = -g\nend g=9.81All we have to do in order specify the event is to have a function which should always be positive with an event occurring at 0. For now at least that's how it's specified, if a generalization is needed we can talk about this (but it needs to be \"root-findable\"). For here it's clear that we just want to check if the ball's height ever hits zero:function event_f(t,u) # Event when event_f(t,u,k) == 0\n  u[1]\nendNow we have to say what to do when the event occurs. In this case we just flip the velocity (the second variable)function apply_event!(u,cache)\n  u[2] = -u[2]\nendThat's all you need to specify the callback function with the macro:callback = @ode_callback begin\n  @ode_event event_f apply_event!\nendOne thing to note is that by default this will check at 5 evently-spaced interpolated values for if the event condition is satisfied (i.e. if event_f(t,u)<0). This is because if your problem is oscillatory, sometimes too large of a timestep will miss the event. One may want to specify a number of points in the interval to interpolate to match the computational effort to the problem. This is done with one more parameter to @ode_event. Note that the interpolations are comparatively cheap to calculate so it's recommended that one use a few (if the memory for calck is available).Another parameter you can set for @ode_event is whether to use a rootfinder. By default, when an event is detected, a rootfinding algorithm (provided by NLsolve) is used to find the exact timepoint of the event. This can be computationally costly for large systems and thus there's an option to turn it off.Lastly, you can also tell the solver to decrease Δt after the event occurs. This can be helpful if the discontinuity changes the problem immensely. Using the full power of the macro, we can define an event asconst Δt_safety = 1 # Multiplier to Δt after an event\nconst interp_points = 10\ncallback = @ode_callback begin\n  @ode_event event_f apply_event! rootfind_event_loc interp_points Δt_safety\nendThen you can solve and plot:u0 = [50.0,0.0]\nprob = ODEProblem(f,u0)\ntspan = [0;15]\nsol = solve(prob,tspan,callback=callback)\nplot(sol)BallBounceAs you can see from the resulting image, DifferentialEquations.jl is smart enough to use the interpolation to hone in on the time of the event and apply the event back at the correct time. Thus one does not have to worry about the adaptive timestepping \"overshooting\" the event as this is handled for you. Notice that the event macro will save the value(s) at the discontinuity."
},

{
    "location": "man/callback_functions.html#Example-2:-Growing-Cell-Population-1",
    "page": "Event Handling and Callback Functions",
    "title": "Example 2: Growing Cell Population",
    "category": "section",
    "text": "Another interesting issue are models of changing sizes. The ability to handle such events is a unique feature of DifferentialEquations.jl! The problem we would like to tackle here is a cell population. We start with 1 cell with a protein X which increases linearly with time with rate parameter α. Since we are going to be changing the size of the population, we write the model in the general form:const α = 0.3\nf = function (t,u,du)\n  for i in 1:length(u)\n    du[i] = α*u[i]\n  end\nendOur model is that, whenever the protein X gets to a concentration of 1, it triggers a cell division. So we check to see if any concentrations hit 1:function event_f(t,u) # Event when event_f(t,u,k) == 0\n  1-maximum(u)\nendAgain, recall that this function finds events as switching from positive to negative, so 1-maximum(u) is positive until a cell has a concentration of X which is 1, which then triggers the event. At the event, we have that the call splits into two cells, giving a random amount of protein to each one. We can do this by resizing the cache (adding 1 to the length of all of the caches) and setting the values of these two cells at the time of the event:function apply_event!(u,cache)\n  @ode_change_cachesize cache length+1\n  maxidx = findmax(u)[2]\n  Θ = rand()\n  u[maxidx] = Θ\n  u[end] = 1-Θ\nend@ode_change_cachesize cache length+1 is used to change the length of all of the internal caches (which includes u) to be their current length + 1, growing the ODE system. Then the following code sets the new protein concentrations. Now we can solve:const Δt_safety = 1\nconst interp_points = 10\ncallback = @ode_callback begin\n  @ode_event event_f apply_event! interp_points Δt_safety\nend\nu0 = [0.2]\nprob = ODEProblem(f,u0)\ntspan = [0;10]\nsol = solve(prob,tspan,callback=callback)The plot recipes do not have a way of handling the changing size, but we can plot from the solution object directly. For example, let's make a plot of how many cells there are at each time. Since these are discrete values, we calculate and plot them directly:plot(sol.t,map((x)->length(x),sol[:]),lw=3,\n     ylabel=\"Number of Cells\",xlabel=\"Time\")NumberOfCellsNow let's check-in on a cell. We can still use the interpolation to get a nice plot of the concentration of cell 1 over time. This is done with the command:ts = linspace(0,10,100)\nplot(ts,map((x)->x[1],sol.(ts)),lw=3,\n     ylabel=\"Amount of X in Cell 1\",xlabel=\"Time\")Cell1Notice that every time it hits 1 the cell divides, giving cell 1 a random amount of X which then grows until the next division."
},

{
    "location": "man/callback_functions.html#Advanced:-Callback-Function-API-1",
    "page": "Event Handling and Callback Functions",
    "title": "Advanced: Callback Function API",
    "category": "section",
    "text": "The callback functions have access to a lot of the functionality of the solver. The macro defines a function which is written as follows:macro ode_callback(ex)\n  esc(quote\n    function (alg,f,t,u,k,tprev,uprev,kprev,ts,timeseries,ks,Δtprev,Δt,saveat,cursaveat,iter,save_timeseries,timeseries_steps,uEltype,ksEltype,dense,kshortsize,issimple_dense,fsal,fsalfirst,cache)\n      reeval_fsal = false\n      event_occured = false\n      $(ex)\n      cursaveat,Δt,t,reeval_fsal\n    end\n  end)\nendAll of the parts of the algorithm are defined in the internal solver documentation."
},

{
    "location": "man/callback_functions.html#Example:-Bouncing-Ball-Without-Macros-1",
    "page": "Event Handling and Callback Functions",
    "title": "Example: Bouncing Ball Without Macros",
    "category": "section",
    "text": "Here is an example of the defining the ball bouncing callback without the usage of macros. The entire code in its fully glory is generic enough to handle any of the implemented DifferentialEquations.jl algorithms, which special differences depending on the type of interpolant, implementation of FSAL, etc. For these reasons it's usually recommended to use the event handling macro, though this kind of code will allow you handle pretty much anything!manual_callback = function (alg,f,t,u,k,tprev,uprev,kprev,ts,timeseries,ks,Δtprev,Δt,saveat,cursaveat,iter,save_timeseries,timeseries_steps,uEltype,ksEltype,dense,kshortsize,issimple_dense,fsal,fsalfirst,cache)\n  reeval_fsal = false\n  event_occured = false\n  Δt_safety = 1\n  interp_points = 10\n\n  # Event Handling\n  ode_addsteps!(k,tprev,uprev,Δtprev,alg,f)\n  Θs = linspace(0,1,interp_points)\n  interp_index = 0\n  # Check if the event occured\n  if event_f(t,u)<0\n    event_occured = true\n    interp_index = interp_points\n  elseif interp_points!=0 # Use the interpolants for safety checking\n    for i in 2:length(Θs)-1\n      if event_f(t+Δt*Θs[i],ode_interpolant(Θs[i],Δtprev,uprev,u,kprev,k,alg))<0\n        event_occured = true\n        interp_index = i\n        break\n      end\n    end\n  end\n\n  if event_occured\n    if interp_index == interp_points # If no safety interpolations, start in the middle as well\n      initial_Θ = [.5]\n    else\n      initial_Θ = [Θs[interp_index]] # Start at the closest\n    end\n    find_zero = (Θ,val) -> begin\n      val[1] = event_f(t+Θ[1]*Δt,ode_interpolant(Θ[1],Δtprev,uprev,u,kprev,k,alg))\n    end\n    res = nlsolve(find_zero,initial_Θ)\n    val = ode_interpolant(res.zero[1],Δtprev,uprev,u,kprev,k,alg)\n    for i in eachindex(u)\n      u[i] = val[i]\n    end\n    Δtprev *= res.zero[1]\n    t = tprev + Δtprev\n\n    if alg ∈ DIFFERENTIALEQUATIONSJL_SPECIALDENSEALGS\n      resize!(k,kshortsize) # Reset k for next step\n      k = typeof(k)() # Make a local blank k for saving\n      ode_addsteps!(k,tprev,uprev,Δtprev,alg,f)\n    elseif typeof(u) <: Number\n      k = f(t,u)\n    else\n      f(t,u,k)\n    end\n  end\n\n  @ode_savevalues\n\n  if event_occured\n    apply_event!(u)\n    if alg ∉ DIFFERENTIALEQUATIONSJL_SPECIALDENSEALGS\n      if typeof(u) <: Number\n        k = f(t,u)\n      else\n        f(t,u,k)\n      end\n    end\n    @ode_savevalues\n    if fsal\n      reeval_fsal = true\n    end\n    Δt *= Δt_safety # Safety Δt change\n  end\n\n  cursaveat,Δt,t,reeval_fsal\nend"
},

{
    "location": "man/plot.html#",
    "page": "Plot Functions",
    "title": "Plot Functions",
    "category": "page",
    "text": ""
},

{
    "location": "man/plot.html#Plot-Functions-1",
    "page": "Plot Functions",
    "title": "Plot Functions",
    "category": "section",
    "text": ""
},

{
    "location": "man/plot.html#Standard-Plots-1",
    "page": "Plot Functions",
    "title": "Standard Plots",
    "category": "section",
    "text": "Plotting functionality is provided by a recipe to Plots.jl. To use plot solutions, simply call the plot(type) and the plotter will generate appropriate plots. If save_timeseries was used, the plotters can generate animations of the solutions to evolution equations. Plots can be customized using all of the keyword arguments provided by Plots.jl. Please see Plots.jl's documentation for more information.A few extra arguments are provided addition to the Plots.jl keyword arguments. They are as follows:plot_analytic: Specifies whether the true solution (if known) should be plotted alongside the numerically approximated solution. Default is false.\nfilename: Specifies the filename to save an animation. Only applies to the animate function.\nfps: Determines the fps in an animation. Only applies to the animate function."
},

{
    "location": "man/plot.html#DifferentialEquations.animate",
    "page": "Plot Functions",
    "title": "DifferentialEquations.animate",
    "category": "Function",
    "text": "animate(sol::FEMSolution)\n\nPlots an animation of the solution. Requires save_timeseries=true was enabled in the solver.\n\n\n\n"
},

{
    "location": "man/plot.html#Extra-Plot-Functions-1",
    "page": "Plot Functions",
    "title": "Extra Plot Functions",
    "category": "section",
    "text": "DifferentialEquations.animate"
},

{
    "location": "man/function_definition_macros.html#",
    "page": "Function Definition Macros",
    "title": "Function Definition Macros",
    "category": "page",
    "text": ""
},

{
    "location": "man/function_definition_macros.html#Function-Definition-Macros-1",
    "page": "Function Definition Macros",
    "title": "Function Definition Macros",
    "category": "section",
    "text": "DifferentialEquations.jl provides a set of macros for more easily and legibly defining your differential equations. It exploits the standard notation for mathematically writing differential equations and the notation for \"punching differential equations into the computer\"; effectively doing the translation step for you. This is best shown by an example. Say we want to solve the ROBER model. Using the @ode_define macro, we can do this by writing:f = @ode_define begin\n  dy₁ = -k₁*y₁+k₃*y₂*y₃\n  dy₂ =  k₁*y₁-k₂*y₂^2-k₃*y₂*y₃\n  dy₃ =  k₂*y₂^2\nend k₁=>0.04 k₂=>3e7 k₃=>1e4This looks just like psudocode! The macro will expand this to the \"standard form\", i.e. the ugly computer form:f = (t,u,du) -> begin\n  du[1] = -0.04*u[1] + 1e4*u[2]*u[3]\n  du[2] = 0.04*u[1] - 3e7*u[2]^2 - 1e4*u[2]*u[3]\n  du[3] = 3e7*u[2]^2\nendNote that one doesn't need to use numbered variables: DifferentialEquations.jl will number the variables for you. For example, the follows defines the function for the Lotka-Voltera model:f = @ode_define begin\n  dx = a*x - b*x*y\n  dy = -c*y + d*x*y\nend a=1.5 b=1 c=3 d=1The other macro which is currently provided is the @fem_define macro. This macro is for parsing and writing FEM functions. For example, in the FEM methods you have to use x[:,1] instead of x and x[:,2] instead of y. The macro will automatically do this replacement, along with adding in parameters. Since FEM functions are more general, we also have to give it the function signature. Using the macro looks like this:f  = @fem_define (x) begin\n  sin(α.*x).*cos(α.*y)\nend α=>2π\ngD = @fem_define (x) begin\n  sin(α.*x).*cos(α.*y)/β\nend α=>2π β=>8π*πThis is equivalent to the definitionf(x) = sin(2π.*x[:,1]).*cos(2π.*x[:,2])\ngD(x) = sin(2π.*x[:,1]).*cos(2π.*x[:,2])/(8π*π)The true power comes in when dealing with nonlinear equations. The second argument, which we skipped over as (), is for listing the variables you wish to define the equation by. Mathematically you may be using u,v,w, etc., but for array-based algorithms you need to use u[:,1],u[:,2],etc. To avoid obfuscated code, the @fem_define macro does this conversion. For example:l = @fem_define (t,x,u) begin\n  du = ones(length(u))-α*u\n  dv = ones(length(v))-v\nend α=>0.5says there are two equations, one for u: (ones(length(u))-α*u) and one for v: (ones(length(v))-v). This expands to the equationl = (t,x,u)  -> [ones(size(x,1))-.5u[:,1]   ones(size(x,1))-u[:,2]]When you have 10+ variables, using @fem_define leads to code which is much easier to read!"
},

{
    "location": "man/benchmarks.html#",
    "page": "Benchmark Suite",
    "title": "Benchmark Suite",
    "category": "page",
    "text": ""
},

{
    "location": "man/benchmarks.html#Benchmark-Suite-1",
    "page": "Benchmark Suite",
    "title": "Benchmark Suite",
    "category": "section",
    "text": "DiffernetialEquations.jl provides a benchmarking suite to be able to test the difference in error, speed, and efficiency between algorithms. DifferentialEquations.jl includes current benchmarking notebooks to help users understand the performance of the methods. These benchmarking notebooks use the included benchmarking suite. There are two parts to the benchmarking suite: shootouts and work-precision. The Shootout tests methods head-to-head for timing and error on the same problem. A WorkPrecision draws a work-precision diagram for the algorithms in question on the chosen problem."
},

{
    "location": "man/benchmarks.html#Using-the-Benchmarking-Notebooks-1",
    "page": "Benchmark Suite",
    "title": "Using the Benchmarking Notebooks",
    "category": "section",
    "text": "To use the benchmarking notebooks, IJulia is required. The commands are as follows:using IJulia\nnotebook(dir = Pkg.dir(\"DifferentialEquations\")*\"/benchmarks\")"
},

{
    "location": "man/benchmarks.html#Shootout-1",
    "page": "Benchmark Suite",
    "title": "Shootout",
    "category": "section",
    "text": "A shootout is where you compare between algorithms. For example, so see how different Runge-Kutta algorithms fair against each other, one can define a setup which is a dictionary of Symbols to Any, where the symbol is the keyword argument. Then you call ode_shootout on that setup. The code is as follows:tspan = [0,10]\nsetups = [Dict(:alg=>:DP5)\n          Dict(:abstol=>1e-3,:reltol=>1e-6,:alg=>:ode45) # Fix ODE to be normal\n          Dict(:alg=>:dopri5)]\nprob = DifferentialEquations.prob_ode_large2Dlinear\nnames = [\"DifferentialEquations\";\"ODE\";\"ODEInterface\"]\nshoot = ode_shootout(prob,tspan,setups;Δt=1/2^(10),names=names)Note that keyword arguments applied to ode_shootout are applie dot every run, so in this example every run has the same starting timestep.  Here we explicitly chose names. If you don't, then the algorithm name is the default. This returns a Shootout type where which holds the times it took for each algorithm and the errors. Using these, it calculates the efficiency defnied as 1/(error*time), i.e. if the error is low or the run was quick then it's efficient. print(shoot) will show all of this information, and plot(shoot) will show the efficiencies of the algorithms in comparison to each other.For every benchmark function there is a special keyword numruns which controls the number of runs used in the time estimate. To be more precise, these functions by default run the algorithm 20 times on the problem and take the average time. This amount can be increased and decreased as needed.A ShootoutSet is a where you define a vector of probs and tspans and run a shootout on each of these values."
},

{
    "location": "man/benchmarks.html#WorkPrecision-1",
    "page": "Benchmark Suite",
    "title": "WorkPrecision",
    "category": "section",
    "text": "A WorkPrecision calculates the necessary componnets of a work-precision plot. This shows how time scales with the user chosen tolerances on a given problem. To make a WorkPrecision, you give it a vector of absolute and relative tolerances:abstols = 1./10.^(3:10)\nreltols = 1./10.^(3:10)\nwp = ode_workprecision(prob,tspan,abstols,reltols;alg=:DP5,name=\"Dormand-Prince 4/5\")If we want to plot many WorkPrecisions together in order to compare between algorithms, you can make a WorkPrecisionSet. To do so, you pass the setups into the function as well:wp_set = ode_workprecision_set(prob,tspan,abstols,reltols,setups;Δt=1/2^4,numruns=2)\nsetups = [Dict(:alg=>:RK4);Dict(:alg=>:Euler);Dict(:alg=>:BS3);\n          Dict(:alg=>:Midpoint);Dict(:alg=>:BS5);Dict(:alg=>:DP5)]\nwp_set = ode_workprecision_set(prob,tspan,abstols,reltols,setups;Δt=1/2^4,numruns=2)Both of these types have a plot recipe to produce a work-precision diagram, and a print which will show some relevant information."
},

{
    "location": "man/convergence.html#",
    "page": "Convergence Simulations",
    "title": "Convergence Simulations",
    "category": "page",
    "text": ""
},

{
    "location": "man/convergence.html#Convergence-Simulations-1",
    "page": "Convergence Simulations",
    "title": "Convergence Simulations",
    "category": "section",
    "text": "The convergence simulation type is useful for deriving order of convergence estimates from a group of simulations. This object will automatically assemble error vectors into a more useful manner and provide plotting functionality. Convergence estimates are also given by pair-wise estimates.One can automatically have DifferentialEquations.jl perform the error analysis by passing a ConvergenceSimulation a vector of solutions, or using one of the provided test_convergence functions. These will give order of convergence estimates and provide plotting functionality. This requires that the true solution was provided in the problem definition.ConvergenceSimulations can either be created by passing the constructor the appropriate solution array or by using one of the provided test_convergence functions."
},

{
    "location": "man/convergence.html#DifferentialEquations.ConvergenceSimulation",
    "page": "Convergence Simulations",
    "title": "DifferentialEquations.ConvergenceSimulation",
    "category": "Type",
    "text": "ConvergenceSimulation\n\nA type which holds the data from a convergence simulation.\n\nFields\n\nsolutions::Array{DESolution}: Holds all the PdeSolutions.\nerrors: Dictionary of the error calculations. Can contain:\nh1Errors: Vector of the H1 errors.\nl2Errors: Vector of the L2 errors.\nmaxErrors: Vector of the nodal maximum errors.\nnode2Errors: Vector of the nodal l2 errors.\nN: The number of simulations.\nauxdata: Auxillary data of the convergence simluation. Entries can include:\nΔts: The Δt's in the simulations.\nΔxs: The Δx's in the simulations.\nμs: The CFL μ's in the simulations.\nνs: The CFL ν's in the simulations.\n𝒪est: Dictionary of order estimates. Can contain:\nConvEst_h1: The H1 error order of convergence estimate for the convergence simulation.  Generated via log2(error[i+1]/error[i]). Thus only valid if generated by halving/doubling  the Δt/Δx. If alternate scaling, modify by dividing of log(base,ConvEst_h1)\nConvEst_l2: The L2 error order of convergence estimate for the convergence simulation.  Generated via log2(error[i+1]/error[i]). Thus only valid if generated by halving/doubling  the Δt/Δx. If alternate scaling, modify by dividing of log(base,ConvEst_l2)\nConvEst_max: The nodal maximum error order of convergence estimate for the convergence simulation.  Generated via log2(error[i+1]/error[i]). Thus only valid if generated by halving/doubling  the Δt/Δx. If alternate scaling, modify by dividing of log(base,ConvEst_max)\nConvEst_node2: The nodal l2 error order of convergence estimate for the convergence simulation.  Generated via log2(error[i+1]/error[i]). Thus only valid if generated by halving/doubling  the Δt/Δx. If alternate scaling, modify by dividing of log(base,ConvEst_node2)\nconvergence_axis: The axis along which convergence is calculated. For example, if  we calculate the Δt convergence, convergence_axis is the Δts used in the calculation.\n\n\n\n"
},

{
    "location": "man/convergence.html#The-ConvergenceSimulation-Type-1",
    "page": "Convergence Simulations",
    "title": "The ConvergenceSimulation Type",
    "category": "section",
    "text": "DifferentialEquations.ConvergenceSimulation"
},

{
    "location": "man/convergence.html#Plot-Functions-1",
    "page": "Convergence Simulations",
    "title": "Plot Functions",
    "category": "section",
    "text": "The plot functionality is provided by a Plots.jl recipe. What is plotted is a line series for each calculated error along the convergence axis. To plot a convergence simulation, simply use:plot(sim::ConvergenceSimulation)All of the functionality (keyword arguments) provided by Plots.jl are able to be used in this command. Please see the Plots.jl documentation for more information."
},

{
    "location": "man/convergence.html#Base.length-Tuple{DifferentialEquations.ConvergenceSimulation}",
    "page": "Convergence Simulations",
    "title": "Base.length",
    "category": "Method",
    "text": "length(simres::ConvergenceSimulation)\n\nReturns the number of simultations in the Convergence Simulation\n\n\n\n"
},

{
    "location": "man/convergence.html#DifferentialEquations.calc𝒪estimates",
    "page": "Convergence Simulations",
    "title": "DifferentialEquations.calc𝒪estimates",
    "category": "Function",
    "text": "calc𝒪estimates(error::Vector{Number})\n\nComputes the pairwise convergence estimate for a convergence test done by halving/doubling stepsizes via\n\nlog2(error[i+1]/error[i])\n\nReturns the mean of the convergence estimates\n\n\n\n"
},

{
    "location": "man/convergence.html#DifferentialEquations.test_convergence",
    "page": "Convergence Simulations",
    "title": "DifferentialEquations.test_convergence",
    "category": "Function",
    "text": "test_convergence(Δts::AbstractArray,prob::SDEProblem)\n\nTests the strong order time convergence of the given algorithm on the given problem solved over the given Δts.\n\nKeyword Arguments\n\nT: The final time. Default is 1\nnumMonte: The number of simulations for each Δt. Default is 10000.\nsave_timeseries: Denotes whether to save at every timeseries_steps steps. Default is true.\ntimeseries_steps: Denotes the steps to save at if save_timeseries=true. Default is 1\nalg: The algorithm to test. Defaults to \"EM\".\n\n\n\ntest_convergence(Δts::AbstractArray,prob::ODEProblem)\n\nTests the order of the time convergence of the given algorithm on the given problem solved over the given Δts.\n\nKeyword Arguments\n\nT: The final time. Default is 1\nsave_timeseries: Denotes whether to save at every timeseries_steps steps. Default is true.\ntimeseries_steps: Denotes the steps to save at if save_timeseries=true. Default is 1\nalg: The algorithm to test. Defaults to \"Euler\".\ntableau: The tableau used for generic methods. Defaults to ODE_DEFAULT_TABLEAU.\n\n\n\ntest_convergence(Δts::AbstractArray,Δxs::AbstractArray,prob::HeatProblem,convergence_axis)\n\nTests the convergence of the solver algorithm on the given Heat problem with the Δts and Δxs as given. Uses the square mesh [0,1]x[0,1]. The convergence axis is the axis along which convergence is calculated. For example, when testing Δt convergence, convergence_axis = Δts.\n\nKeyword Arguments\n\nT: The final time. Defaults to 1\nalg: The algorithm to test. Default is \"Euler\".\n\n\n\ntest_convergence(Δxs::AbstractArray,prob::PoissonProblem)\n\nTests the convergence of the solver algorithm on the given Poisson problem with Δxs as given. Uses the square mesh [0,1]x[0,1].\n\nKeyword Arguments\n\nsolver: Which solver to use. Default is \"Direct\".\n\n\n\n"
},

{
    "location": "man/convergence.html#Related-Functions-1",
    "page": "Convergence Simulations",
    "title": "Related Functions",
    "category": "section",
    "text": "Base.length(::ConvergenceSimulation)\nDifferentialEquations.calc𝒪estimates\nDifferentialEquations.test_convergence"
},

{
    "location": "man/conditional_dependencies.html#",
    "page": "Conditional Dependencies",
    "title": "Conditional Dependencies",
    "category": "page",
    "text": ""
},

{
    "location": "man/conditional_dependencies.html#Conditional-Dependencies-1",
    "page": "Conditional Dependencies",
    "title": "Conditional Dependencies",
    "category": "section",
    "text": "DifferentialEquations.jl is conditionally dependent on some packages which may not be required for all users. The upside is that you can run DifferentialEquations.jl without installing these packages. However, the downside is that you will have to do the installation yourself (normal dependencies do a silent install). Luckily DifferentialEquations.jl warns you about missing dependencies when calling a method which requires one. This part of the manual will detail how to see if you're missing a conditional dependency and how to alleviate the issue."
},

{
    "location": "man/conditional_dependencies.html#The-Conditional-Dependency-Notification-1",
    "page": "Conditional Dependencies",
    "title": "The Conditional Dependency Notification",
    "category": "section",
    "text": "When a conditional dependency is required, DifferentialEquations.jl will import the package the first time the method is called. When this happens, you will receive a notification as follows:[DifferentialEquations.jl] Initializing backend: PkgNamewhere PkgName is the name of the package it is importing. DifferentialEquations.jl will then run a standard startup procedure on this package. If it fails, you will receive the messageWARNING: Couldn't initialize PkgName.  (might need to install it?)Most likely the issue is that you need to install the package. Go to the package's Github repository for information on installing the package, and then come back to try again. If that does not work, you may need the latest version of the package by checking out master:Pkg.checkout(\"PkgName\")If all else fails, please ask for help on via the repository Gitter."
},

{
    "location": "man/conditional_dependencies.html#What-Methods-Require-Conditional-Dependencies?-1",
    "page": "Conditional Dependencies",
    "title": "What Methods Require Conditional Dependencies?",
    "category": "section",
    "text": "That's a good question! The implicit algorithms implemented in DifferentialEquations.jl require NLsolve.jl. Also, the load function for the premade meshes requires JLD.jl.Lastly, there is a special conditional dependency for Juno. If you are using Juno, then the progress bar functionality is works. If you're not using Juno, then it won't do anything.The other conditional dependencies are external solvers wrapped by DifferentialEquations.jl. Currently these include:ODE.jl\nODEInterface.jl\nSundials.jl"
},

{
    "location": "man/conditional_dependencies.html#Installation-Instructions-1",
    "page": "Conditional Dependencies",
    "title": "Installation Instructions",
    "category": "section",
    "text": "For most of the conditional dependencies, the installation instructions are standard. However, for some of the newest features, special instructions may be required. The best way to stay up-to-date on this information is to checkout the following resources:The packages which are conditional dependencies and use a standard installation can be found in the /test/REQUIRE file.\nAny special installation instructions are handled via the ci_setup.jl file.The current special installation instructions are as follows:"
},

{
    "location": "man/conditional_dependencies.html#ODE.jl.-1",
    "page": "Conditional Dependencies",
    "title": "ODE.jl.",
    "category": "section",
    "text": "The wrapper currently only works on the development branch of ODE.jl at JuliaODE/ODE.jl. To install this version of ODE.jl, use the following commands:Pkg.clone(\"https://github.com/JuliaODE/ODE.jl\")"
},

{
    "location": "man/conditional_dependencies.html#Sundials.jl-1",
    "page": "Conditional Dependencies",
    "title": "Sundials.jl",
    "category": "section",
    "text": "The wrapper works on the master branch. You can install this via:Pkg.clone(\"https://github.com/JuliaDiffEq/Sundials.jl\")\nPkg.checkout(\"Sundials\")"
},

{
    "location": "man/progress_bar.html#",
    "page": "Juno Progress Bar Integration",
    "title": "Juno Progress Bar Integration",
    "category": "page",
    "text": ""
},

{
    "location": "man/progress_bar.html#Juno-Progress-Bar-Integration-1",
    "page": "Juno Progress Bar Integration",
    "title": "Juno Progress Bar Integration",
    "category": "section",
    "text": "DifferentialEquations.jl integrates with the Juno progress bar in order to make long calculations more manageable. By default this feature is off for ODE and SDE solvers, but can be turned on via the keyword argument progressbar=true. The progress bar updates every progress_steps timesteps, which has a default value of 1000. Note that making this value really low could cause a performance hit, though from some basic testing it seems that with updates of at least  1000 steps on number (the fastest problems) there's no discernable performance degradation,  giving an high upper bound."
},

{
    "location": "internals/contributors_guide.html#",
    "page": "Contributor's Guide",
    "title": "Contributor's Guide",
    "category": "page",
    "text": ""
},

{
    "location": "internals/contributors_guide.html#Contributor's-Guide-1",
    "page": "Contributor's Guide",
    "title": "Contributor's Guide",
    "category": "section",
    "text": "So you're looking to help out DifferentialEquations.jl? We'd be happy to have your help. It is recommended you first discuss with some of the developers on the Gitter channel to make sure that you're up-to-date with current developments."
},

{
    "location": "internals/contributors_guide.html#Developing-New-Solver-Algorithms-1",
    "page": "Contributor's Guide",
    "title": "Developing New Solver Algorithms",
    "category": "section",
    "text": "The easiest way to get started would be to add new solver algorithms. This is a pretty simple task as there are tools which put you right into the \"hot loop\". For example, take a look at the ODE solver code. The mode solve(::ODEProblem,::AbstractArray) is glue code to a bunch of solver algorithms. The algorithms which are coded in DifferentialEquations.jl can be found in ode_integrators.jl. For example, take a look at the Midpoint method's implementation:function ode_solve{uType<:Number,uEltype<:Number,N,tType<:Number,uEltypeNoUnits<:Number,rateType<:Number}(integrator::ODEIntegrator{:Midpoint,uType,uEltype,N,tType,uEltypeNoUnits,rateType})\n  @ode_preamble\n  halfΔt::tType = Δt/2\n  @inbounds for T in Ts\n    while t < T\n      @ode_loopheader\n      u = u + Δt.*f(t+halfΔt,u+halfΔt.*f(t,u))\n      @ode_numberloopfooter\n    end\n  end\n  return u,t,timeseries,ts\nendThe available items are all unloaded from the integrator in the @ode_preamble. @ode_loopheader and @ode_loopfooter macros are for exiting at max iterations, and plugging into the Juno progressbar. These are all defined using the @def macro (they essentially copy-paste the code from the line which says @def ode_loopheader begin ... end). Note that the loopfooter code takes care of the code for doing the adaptive timestepping. All that is required for the adaptivity is that the algorithm computes an error estimate EEst each time, save the value utmp to be what will replace u if the step is not rejected, and add the algorithm's symbol is added to the dictionary ODE_DIFFERENTIALEQUATIONSJL_ADAPTIVEALGS in ode_constants.jl. If implicit solving is needed (via NLsolve), add the algorithm's symbol to DIFFERENTIALEQUATIONSJL_IMPLICITALGS and the conditional dependency will be supplied. Note that you may need more function arguments. Use another method as a template.When the solver is completed, add a call to the solver in the glue code solve(::ODEProblem,::AbstractArray) (you will see all the others), add the symbol for the algorithm to DIFFERENTIALEQUATIONSJL_ALGORITHMS, and the order to DIFFERENTIALEQUATIONSJL_ORDERS. It's that quick! Lastly, add your method to the convergence tests in the appropriate /test file.  Feel free to implement any interesting or educational algorithm: they don't have to be the fastest and it is always is useful to have such algorithms (like Simpson's method) available for demonstration purposes.Adding algorithms to the other problems is very similar."
},

{
    "location": "internals/contributors_guide.html#Extras-1",
    "page": "Contributor's Guide",
    "title": "Extras",
    "category": "section",
    "text": "If the method is a FSAL method then it needs to be set it in DIFFERENTIALEQUATIONSJL_FSALALGS and fsalfirst should be defined before the loop, with fsallast what's pushed up to fsalfirst upon a successful step. See :DP5 for an example.It's usually wise to dispatch onto Number separately since that uses f(t,u) instead of f(t,u,du). The dispatch is chosen by setting the uType and rateType, usually to either <:Number or <:AbstractArray (though they should be the same).If tests fail due to units (i.e. SIUnits), don't worry. I would be willing to fix that up. To do so, you have to make sure you keep separate your rateTypes and your uTypes since the rates from f will have units of u but divided by a unit of time. If you simply try to write these into u, the units part will fail (normally you have to multiply by a t)."
},

{
    "location": "internals/contributors_guide.html#Adding-Conditional-Dependencies-1",
    "page": "Contributor's Guide",
    "title": "Adding Conditional Dependencies",
    "category": "section",
    "text": "If your algorithm requires a conditional dependency (a package, but not one that everyone who uses DifferentialEquations.jl would need), you can add them as follows. Before the loop, add the line initialize_backend(:PkgName) where :PkgName is the same name as the package you wish to use. Then, in general/backends.jl add a dispatch to init_package. A common one would be:init_package(b::backend{:PkgName}) = @eval begin\n      import PkgName\n      export PkgName\n    endNow inside your method you can use any function from the package via PkgName.function. The first time it is used it import the package (or tell the user to install it)."
},

{
    "location": "internals/contributors_guide.html#Developing-A-New-Problem-1",
    "page": "Contributor's Guide",
    "title": "Developing A New Problem",
    "category": "section",
    "text": "To develop a new problem, you need to make a new DEProblem and a new DESolution. The DEProblem type should hold all of the mathematical information about the problem, and the DESolution should hold all of the information for the solution. Then all that is required is to define a solve(::DEProblem,*Extra Mesh Things*;kwargs) which takes in the problem and returns a solution. To add plotting functionality, add a plot recipe for the solution type to /general/plotrecipes. For testing that the algorithm works, add a dispatch for test_convergence which makes a ConvergenceSimulation type. This type already has a plot recipe, so plotting functionality will already be embedded. This requires that your problem can take in a true solution, and has a field errors which is a dictionary of symbols for the different error estimates (L2,L infinity, etc.)"
},

{
    "location": "internals/contributors_guide.html#Other-Help-1",
    "page": "Contributor's Guide",
    "title": "Other Help",
    "category": "section",
    "text": "There's always more to be. Improved plot recipes and new series recipes are always nice to add more default plots. It is always helpful to have benchmarks between different algorithms to see \"which is best\". Adding examples IJulia notebooks to examples/ is a good way to share knowledge about DifferentialEquations.jl. Also, please feel free to comb through the solvers and look for ways to make them more efficient. Lastly, the documentation could always use improvements. If you have any questions on how to help, just ask them in the Gitter!"
},

{
    "location": "internals/fem_tools.html#",
    "page": "Internal Finite Element Tools",
    "title": "Internal Finite Element Tools",
    "category": "page",
    "text": ""
},

{
    "location": "internals/fem_tools.html#Internal-Finite-Element-Tools-1",
    "page": "Internal Finite Element Tools",
    "title": "Internal Finite Element Tools",
    "category": "section",
    "text": ""
},

{
    "location": "internals/fem_tools.html#DifferentialEquations.CFLν",
    "page": "Internal Finite Element Tools",
    "title": "DifferentialEquations.CFLν",
    "category": "Function",
    "text": "CFLν(Δt,Δx)`\n\nComputes the CFL-condition = tx\n\n\n\n"
},

{
    "location": "internals/fem_tools.html#DifferentialEquations.CFLμ",
    "page": "Internal Finite Element Tools",
    "title": "DifferentialEquations.CFLμ",
    "category": "Function",
    "text": "CFLμ(Δt,Δx)`\n\nComputes the CFL-condition = t(x*x)\n\n\n\n"
},

{
    "location": "internals/fem_tools.html#Mesh-Tools-1",
    "page": "Internal Finite Element Tools",
    "title": "Mesh Tools",
    "category": "section",
    "text": "DifferentialEquations.CFLν\nDifferentialEquations.CFLμ"
},

{
    "location": "internals/fem_tools.html#DifferentialEquations.∇basis",
    "page": "Internal Finite Element Tools",
    "title": "DifferentialEquations.∇basis",
    "category": "Function",
    "text": "∇basis(node,elem)\n\nReturns u of the barycentric basis elements.\n\n\n\n"
},

{
    "location": "internals/fem_tools.html#DifferentialEquations.quadfbasis",
    "page": "Internal Finite Element Tools",
    "title": "DifferentialEquations.quadfbasis",
    "category": "Function",
    "text": "quadfbasis(f,gD,gN,A,u,node,elem,area,bdnode,mid,N,NT,dirichlet,neumann,islinear,numvars;gNquad𝒪=2)\n\nPerforms the order 2 quadrature to calculate the vector from the term fv for linear elements.\n\n\n\n"
},

{
    "location": "internals/fem_tools.html#DifferentialEquations.quadpts",
    "page": "Internal Finite Element Tools",
    "title": "DifferentialEquations.quadpts",
    "category": "Function",
    "text": "quadpts(𝒪)\n\nReturns the quadrature points and ω's for and 𝒪  in 2D.\n\nReference: David Dunavant. High degree efficient symmetrical Gaussian quadrature rules for the triangle. International journal for numerical methods in engineering. 21(6):1129–1148, 1985.\n\n\n\n"
},

{
    "location": "internals/fem_tools.html#DifferentialEquations.quadpts1",
    "page": "Internal Finite Element Tools",
    "title": "DifferentialEquations.quadpts1",
    "category": "Function",
    "text": "quadpts1(𝒪)\n\nReferences: Pavel Holoborodko: http://www.holoborodko.com/pavel/numerical-methods/numerical-integration/\n\n\n\n"
},

{
    "location": "internals/fem_tools.html#DifferentialEquations.assemblematrix",
    "page": "Internal Finite Element Tools",
    "title": "DifferentialEquations.assemblematrix",
    "category": "Function",
    "text": "assemblematrix(node,elem;lumpflag=false,K=[])\n\nAssembles the stiffness matrix A as an approximation to Δ on the finite element mesh (node,elem). Also generates the mass matrix M. If lumpflag=true, then the mass matrix is lumped resulting in a diagonal mass matrix. Specify a diffusion constant along the nodes via K.\n\nReturns\n\nA = Stiffness Matrix\nM = Mass Matrix\narea = A vector of the calculated areas for each element.\n\n\n\nassemblematrix(FEMmesh::FEMmesh;lumpflag=false,K=[])\n\nAssembles the stiffness matrix A as an approximation to Δ on the finite element mesh (node,elem). Also generates the mass matrix M. If lumpflag=true, then the mass matrix is lumped resulting in a diagonal mass matrix. Specify a diffusion constant along the nodes via K.\n\nReturns\n\nA = Stiffness Matrix\nM = Mass Matrix\narea = A vector of the calculated areas for each element.\n\n\n\n"
},

{
    "location": "internals/fem_tools.html#DifferentialEquations.∇u",
    "page": "Internal Finite Element Tools",
    "title": "DifferentialEquations.∇u",
    "category": "Function",
    "text": "∇u(node,elem,u,Dλ=[])\n\nEstimates u on the mesh (node,elem)\n\n\n\n"
},

{
    "location": "internals/fem_tools.html#Solver-Tools-1",
    "page": "Internal Finite Element Tools",
    "title": "Solver Tools",
    "category": "section",
    "text": "DifferentialEquations.∇basis\nDifferentialEquations.quadfbasis\nDifferentialEquations.quadpts\nDifferentialEquations.quadpts1\nDifferentialEquations.assemblematrix\nDifferentialEquations.∇u"
},

{
    "location": "internals/fem_tools.html#DifferentialEquations.getH1error",
    "page": "Internal Finite Element Tools",
    "title": "DifferentialEquations.getH1error",
    "category": "Function",
    "text": "function getH1error(node,elem,Du,uh,K=[],quad𝒪=[])\n\ngetH1error(fem_mesh::FEMmesh,Du,u)\n\nEstimates the H1 error between uexact and uh on the mesh (node,elem). It reads the mesh to estimate the element type and uses this to choose a quadrature 𝒪 unless specified. If K is specified then it is the diffusion coefficient matrix.\n\n\n\n"
},

{
    "location": "internals/fem_tools.html#DifferentialEquations.getL2error",
    "page": "Internal Finite Element Tools",
    "title": "DifferentialEquations.getL2error",
    "category": "Function",
    "text": "getL2error(node,elem,uexact,uh,quad𝒪=[])\n\ngetL2error(fem_mesh::FEMmesh,sol,u)\n\nEstimates the L2 error between uexact and uh on the mesh (node,elem). It reads the mesh to estimate the element type and uses this to choose a quadrature 𝒪 unless specified.\n\n\n\n"
},

{
    "location": "internals/fem_tools.html#Error-Tools-1",
    "page": "Internal Finite Element Tools",
    "title": "Error Tools",
    "category": "section",
    "text": "DifferentialEquations.getH1error\nDifferentialEquations.getL2error"
},

{
    "location": "internals/extras.html#",
    "page": "Extra Functions",
    "title": "Extra Functions",
    "category": "page",
    "text": ""
},

{
    "location": "internals/extras.html#DifferentialEquations.getNoise",
    "page": "Extra Functions",
    "title": "DifferentialEquations.getNoise",
    "category": "Function",
    "text": "getNoise(N,node,elem;noisetype=:White)\n\nReturns a random vector corresponding to the noise type which was chosen.\n\n\n\n"
},

{
    "location": "internals/extras.html#DifferentialEquations.numparameters",
    "page": "Extra Functions",
    "title": "DifferentialEquations.numparameters",
    "category": "Function",
    "text": "numparameters(f)\n\nReturns the number of parameters of f for the method which has the most parameters.\n\n\n\n"
},

{
    "location": "internals/extras.html#DifferentialEquations.Tableau",
    "page": "Extra Functions",
    "title": "DifferentialEquations.Tableau",
    "category": "Type",
    "text": "Tableau: Holds the information for a Runge-Kutta Tableau\n\n\n\n"
},

{
    "location": "internals/extras.html#DifferentialEquations.DEProblem",
    "page": "Extra Functions",
    "title": "DifferentialEquations.DEProblem",
    "category": "Type",
    "text": "PdeProblem: Defines differential equation problems via its internal functions\n\n\n\n"
},

{
    "location": "internals/extras.html#Extra-Functions-1",
    "page": "Extra Functions",
    "title": "Extra Functions",
    "category": "section",
    "text": "DifferentialEquations.getNoise\nDifferentialEquations.numparameters\nDifferentialEquations.Tableau\nDifferentialEquations.DEProblem"
},

{
    "location": "internals/solver_helpers.html#",
    "page": "Solver Helpers",
    "title": "Solver Helpers",
    "category": "page",
    "text": ""
},

{
    "location": "internals/solver_helpers.html#Solver-Helpers-1",
    "page": "Solver Helpers",
    "title": "Solver Helpers",
    "category": "section",
    "text": "This package includes the documentation for the helper functions for the various solvers."
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.DEParameters",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.DEParameters",
    "category": "Type",
    "text": "DEParameters: Holds the parameters used in a DifferntialEquations model\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.DEIntegrator",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.DEIntegrator",
    "category": "Type",
    "text": "DEIntegrator: A DifferentialEquations Integrator type, used to initiate a solver.\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#Abstract-Types-1",
    "page": "Solver Helpers",
    "title": "Abstract Types",
    "category": "section",
    "text": "DifferentialEquations.DEParameters\nDifferentialEquations.DEIntegrator"
},

{
    "location": "internals/solver_helpers.html#ODE-Tableaus-1",
    "page": "Solver Helpers",
    "title": "ODE Tableaus",
    "category": "section",
    "text": ""
},

{
    "location": "internals/solver_helpers.html#Base.length-Tuple{DifferentialEquations.ODERKTableau}",
    "page": "Solver Helpers",
    "title": "Base.length",
    "category": "Method",
    "text": "Base.length(tab::ODERKTableau)\n\nDefines the length of a Runge-Kutta method to be the number of stages.\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.stability_region",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.stability_region",
    "category": "Function",
    "text": "stability_region(z,tab::ODERKTableau)\n\nCalculates the stability function from the tableau at z. Stable if <1.\n\nr(z) = fracdet(I-zA+zeb^T)det(I-zA)\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.ExplicitRKTableau",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.ExplicitRKTableau",
    "category": "Type",
    "text": "ExplicitRKTableau\n\nHolds a tableau which defines an explicit Runge-Kutta method.\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.ImplicitRKTableau",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.ImplicitRKTableau",
    "category": "Type",
    "text": "ImplicitRKTableau\n\nHolds a tableau which defines an implicit Runge-Kutta method.\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.ODERKTableau",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.ODERKTableau",
    "category": "Type",
    "text": "ODERKTableau: A Runge-Kutta Tableau for an ODE integrator\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.ODE_DEFAULT_TABLEAU",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.ODE_DEFAULT_TABLEAU",
    "category": "Constant",
    "text": "ODE_DEFAULT_TABLEAU\n\nSets the default tableau for the ODE solver. Currently Dormand-Prince 4/5.\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#Tableau-Methods-1",
    "page": "Solver Helpers",
    "title": "Tableau Methods",
    "category": "section",
    "text": "Base.length(::DifferentialEquations.ODERKTableau)\nDifferentialEquations.stability_region\nDifferentialEquations.ExplicitRKTableau\nDifferentialEquations.ImplicitRKTableau\nDifferentialEquations.ODERKTableau\nDifferentialEquations.ODE_DEFAULT_TABLEAU"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructEuler",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructEuler",
    "category": "Function",
    "text": "Euler's method.\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructRalston",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructRalston",
    "category": "Function",
    "text": "Ralston's Order 2 method.\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructHeun",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructHeun",
    "category": "Function",
    "text": "Heun's Order 2 method.\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructKutta3",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructKutta3",
    "category": "Function",
    "text": "Kutta's Order 3 method.\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructBS3",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructBS3",
    "category": "Function",
    "text": "constructBogakiShampine3()\n\nConstructs the tableau object for the Bogakai-Shampine Order 2/3 method.\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructBogakiShampine3",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructBogakiShampine3",
    "category": "Function",
    "text": "constructBogakiShampine3()\n\nConstructs the tableau object for the Bogakai-Shampine Order 2/3 method.\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructRK4",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructRK4",
    "category": "Function",
    "text": "Classic RK4 method.\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructRK438Rule",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructRK438Rule",
    "category": "Function",
    "text": "Classic RK4 3/8's rule method.\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructRKF4",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructRKF4",
    "category": "Function",
    "text": "Runge-Kutta-Fehberg Order 4/3\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructRKF5",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructRKF5",
    "category": "Function",
    "text": "Runge-Kutta-Fehlberg Order 4/5 method.\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructCashKarp",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructCashKarp",
    "category": "Function",
    "text": "constructCashKarp()\n\nConstructs the tableau object for the Cash-Karp Order 4/5 method.\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructDormandPrince",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructDormandPrince",
    "category": "Function",
    "text": "constructDormandPrince()\n\nConstructs the tableau object for the Dormand-Prince Order 4/5 method.\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructBS5",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructBS5",
    "category": "Function",
    "text": "An Efficient Runge-Kutta (4,5) Pair by P.Bogacki and L.F.Shampine  Computers and Mathematics with Applications, Vol. 32, No. 6, 1996, pages 15 to 28\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructPapakostasPapaGeorgiou5",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructPapakostasPapaGeorgiou5",
    "category": "Function",
    "text": "S.N. Papakostas and G. PapaGeorgiou higher error more stable\n\nA Family of Fifth-order Runge-Kutta Pairs, by S.N. Papakostas and G. PapaGeorgiou,  Mathematics of Computation,Volume 65, Number 215, July 1996, Pages 1165-1181.\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructPapakostasPapaGeorgiou52",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructPapakostasPapaGeorgiou52",
    "category": "Function",
    "text": "S.N. Papakostas and G. PapaGeorgiou less stable lower error  Strictly better than DP5\n\nA Family of Fifth-order Runge-Kutta Pairs, by S.N. Papakostas and G. PapaGeorgiou,  Mathematics of Computation,Volume 65, Number 215, July 1996, Pages 1165-1181.\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructTsitouras5",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructTsitouras5",
    "category": "Function",
    "text": "Runge–Kutta pairs of orders 5(4) using the minimal set of simplifying assumptions,  by Ch. Tsitouras, TEI of Chalkis, Dept. of Applied Sciences, GR34400, Psahna, Greece.\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructLutherKonen5",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructLutherKonen5",
    "category": "Function",
    "text": "Luther and Konen's First Order 5 Some Fifth-Order Classical Runge Kutta Formulas, H.A.Luther and H.P.Konen,  Siam Review, Vol. 3, No. 7, (Oct., 1965) pages 551-558.\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructLutherKonen52",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructLutherKonen52",
    "category": "Function",
    "text": "Luther and Konen's Second Order 5 Some Fifth-Order Classical Runge Kutta Formulas, H.A.Luther and H.P.Konen,  Siam Review, Vol. 3, No. 7, (Oct., 1965) pages 551-558.\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructLutherKonen53",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructLutherKonen53",
    "category": "Function",
    "text": "Luther and Konen's Third Order 5 Some Fifth-Order Classical Runge Kutta Formulas, H.A.Luther and H.P.Konen,  Siam Review, Vol. 3, No. 7, (Oct., 1965) pages 551-558.\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructRungeFirst5",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructRungeFirst5",
    "category": "Function",
    "text": "Runge's First Order 5 method\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructLawson5",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructLawson5",
    "category": "Function",
    "text": "Lawson's 5th order scheme\n\nAn Order Five Runge Kutta Process with Extended Region of Stability, J. Douglas Lawson,  Siam Journal on Numerical Analysis, Vol. 3, No. 4, (Dec., 1966) pages 593-597\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructSharpSmart5",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructSharpSmart5",
    "category": "Function",
    "text": "Explicit Runge-Kutta Pairs with One More Derivative Evaluation than the Minimum, by P.W.Sharp and E.Smart,  Siam Journal of Scientific Computing, Vol. 14, No. 2, pages. 338-348, March 1993.\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructBogakiShampine5",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructBogakiShampine5",
    "category": "Function",
    "text": "An Efficient Runge-Kutta (4,5) Pair by P.Bogacki and L.F.Shampine  Computers and Mathematics with Applications, Vol. 32, No. 6, 1996, pages 15 to 28\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructCassity5",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructCassity5",
    "category": "Function",
    "text": "Cassity's Order 5 method\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructButcher6",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructButcher6",
    "category": "Function",
    "text": "Butcher's First Order 6 method\n\nOn Runge-Kutta Processes of High Order, by J. C. Butcher,  Journal of the Australian Mathematical Society, Vol. 4, (1964), pages 179 to 194\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructButcher62",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructButcher62",
    "category": "Function",
    "text": "Butcher's Second Order 6 method\n\nOn Runge-Kutta Processes of High Order, by J. C. Butcher,  Journal of the Australian Mathematical Society, Vol. 4, (1964), pages 179 to 194\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructButcher63",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructButcher63",
    "category": "Function",
    "text": "Butcher's Third Order 6\n\nOn Runge-Kutta Processes of High Order, by J. C. Butcher,  Journal of the Australian Mathematical Society, Vol. 4, (1964), pages 179 to 194\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructVernerRobust6",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructVernerRobust6",
    "category": "Function",
    "text": "From Verner's Website\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructTanakaKasugaYamashitaYazaki6A",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructTanakaKasugaYamashitaYazaki6A",
    "category": "Function",
    "text": "TanakaKasugaYamashitaYazaki Order 6 A\n\nOn the Optimization of Some Eight-stage Sixth-order Explicit Runge-Kutta Method,  by M. Tanaka, K. Kasuga, S. Yamashita and H. Yazaki,  Journal of the Information Processing Society of Japan, Vol. 34, No. 1 (1993), pages 62 to 74.\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructTanakaKasugaYamashitaYazaki6B",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructTanakaKasugaYamashitaYazaki6B",
    "category": "Function",
    "text": "constructTanakaKasugaYamashitaYazaki Order 6 B\n\nOn the Optimization of Some Eight-stage Sixth-order Explicit Runge-Kutta Method,  by M. Tanaka, K. Kasuga, S. Yamashita and H. Yazaki,  Journal of the Information Processing Society of Japan, Vol. 34, No. 1 (1993), pages 62 to 74.\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructTanakaKasugaYamashitaYazaki6C",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructTanakaKasugaYamashitaYazaki6C",
    "category": "Function",
    "text": "constructTanakaKasugaYamashitaYazaki Order 6 C\n\nOn the Optimization of Some Eight-stage Sixth-order Explicit Runge-Kutta Method,  by M. Tanaka, K. Kasuga, S. Yamashita and H. Yazaki,  Journal of the Information Processing Society of Japan, Vol. 34, No. 1 (1993), pages 62 to 74.\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructTanakaKasugaYamashitaYazaki6D",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructTanakaKasugaYamashitaYazaki6D",
    "category": "Function",
    "text": "constructTanakaKasugaYamashitaYazaki Order 6 D\n\nOn the Optimization of Some Eight-stage Sixth-order Explicit Runge-Kutta Method,  by M. Tanaka, K. Kasuga, S. Yamashita and H. Yazaki,  Journal of the Information Processing Society of Japan, Vol. 34, No. 1 (1993), pages 62 to 74.\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructHuta6",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructHuta6",
    "category": "Function",
    "text": "Anton Hutas First Order 6 method\n\nUne amélioration de la méthode de Runge-Kutta-Nyström pour la résolution numérique des équations différentielles du premièr ordre, by Anton Huta, Acta Fac. Nat. Univ. Comenian Math., Vol. 1, pages 201-224 (1956).\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructHuta62",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructHuta62",
    "category": "Function",
    "text": "Anton Hutas Second Order 6 method\n\nUne amélioration de la méthode de Runge-Kutta-Nyström pour la résolution numérique des équations différentielles du premièr ordre, by Anton Huta, Acta Fac. Nat. Univ. Comenian Math., Vol. 1, pages 201-224 (1956).\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructVerner6",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructVerner6",
    "category": "Function",
    "text": "Verner Order 5/6 method\n\nA Contrast of a New RK56 pair with DP56, by Jim Verner,  Department of Mathematics. Simon Fraser University, Burnaby, Canada, 2006.\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructDormandPrince6",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructDormandPrince6",
    "category": "Function",
    "text": "Dormand-Prince Order 5//6 method\n\nP.J. Prince and J. R. Dormand, High order embedded Runge-Kutta formulae, Journal of Computational and Applied Mathematics . 7 (1981), pp. 67-75.\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructSharpVerner6",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructSharpVerner6",
    "category": "Function",
    "text": "Sharp-Verner Order 5/6 method\n\nCompletely Imbedded Runge-Kutta Pairs, by P. W. Sharp and J. H. Verner,  SIAM Journal on Numerical Analysis, Vol. 31, No. 4. (Aug., 1994), pages. 1169 to 1190.\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructVern6",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructVern6",
    "category": "Function",
    "text": "From Verner's Website\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructClassicVerner6",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructClassicVerner6",
    "category": "Function",
    "text": "EXPLICIT RUNGE-KUTFA METHODS WITH ESTIMATES OF THE LOCAL TRUNCATION ERROR\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructChummund6",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructChummund6",
    "category": "Function",
    "text": "Chummund's First Order 6 method\n\nA three-dimensional family of seven-step Runge-Kutta methods of order 6, by G. M. Chammud (Hammud), Numerical Methods and programming, 2001, Vol.2, 2001, pages 159-166 (Advanced Computing Scientific journal published by the Research Computing Center of the Lomonosov Moscow State Univeristy)\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructChummund62",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructChummund62",
    "category": "Function",
    "text": "Chummund's Second Order 6 method\n\nA three-dimensional family of seven-step Runge-Kutta methods of order 6, by G. M. Chammud (Hammud), Numerical Methods and programming, 2001, Vol.2, 2001, pages 159-166 (Advanced Computing Scientific journal published by the Research Computing Center of the Lomonosov Moscow State Univeristy)\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructPapakostas6",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructPapakostas6",
    "category": "Function",
    "text": "Papakostas's Order 6\n\nOn Phase-Fitted modified Runge-Kutta Pairs of order 6(5), by Ch. Tsitouras and I. Th. Famelis,  International Conference of Numerical Analysis and Applied Mathematics, Crete, (2006)\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructLawson6",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructLawson6",
    "category": "Function",
    "text": "Lawson's Order 6\n\nAn Order 6 Runge-Kutta Process with an Extended Region of Stability, by J. D. Lawson,  Siam Journal on Numerical Analysis, Vol. 4, No. 4 (Dec. 1967) pages 620-625.\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructTsitourasPapakostas6",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructTsitourasPapakostas6",
    "category": "Function",
    "text": "Tsitouras-Papakostas's Order 6\n\nCheap Error Estimation for Runge-Kutta methods, by Ch. Tsitouras and S.N. Papakostas, Siam Journal on Scientific Computing, Vol. 20, Issue 6, Nov 1999.\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructDormandLockyerMcCorriganPrince6",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructDormandLockyerMcCorriganPrince6",
    "category": "Function",
    "text": "DormandLockyerMcCorriganPrince Order 6 Global Error Estimation\n\nGlobal Error estimation with Runge-Kutta triples, by J.R.Dormand, M.A.Lockyer, N.E.McCorrigan and P.J.Prince,  Computers and Mathematics with Applications, 18 (1989) pages 835-846.\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructVernerEfficient6",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructVernerEfficient6",
    "category": "Function",
    "text": "From Verner's Website\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructMikkawyEisa",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructMikkawyEisa",
    "category": "Function",
    "text": "Mikkawy-Eisa Order 6\n\nA general four-parameter non-FSAL embedded Runge–Kutta algorithm of orders 6 and 4 in seven stages,  by M.E.A. El-Mikkawy and M.M.M. Eisa,  Applied Mathematics and Computation, Vol. 143, No. 2, (2003) pages 259 to 267.\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructVernerEfficient7",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructVernerEfficient7",
    "category": "Function",
    "text": "From Verner's website\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructClassicVerner7",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructClassicVerner7",
    "category": "Function",
    "text": "EXPLICIT RUNGE-KUTFA METHODS WITH ESTIMATES OF THE LOCAL TRUNCATION ERROR\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructSharpVerner7",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructSharpVerner7",
    "category": "Function",
    "text": "Completely Imbedded Runge-Kutta Pairs, by P.W.Sharp and J.H.Verner, Siam Journal on Numerical Analysis, Vol.31, No.4. (August 1994) pages 1169-1190.\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructTanakaYamashitaStable7",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructTanakaYamashitaStable7",
    "category": "Function",
    "text": "On the Optimization of Some Nine-Stage Seventh-order Runge-Kutta Method, by M. Tanaka, S. Muramatsu and S. Yamashita, Information Processing Society of Japan, Vol. 33, No. 12 (1992) pages 1512-1526.\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructSharpSmart7",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructSharpSmart7",
    "category": "Function",
    "text": "Explicit Runge-Kutta Pairs with One More Derivative Evaluation than the Minimum, by P.W.Sharp and E.Smart,  Siam Journal of Scientific Computing, Vol. 14, No. 2, pages. 338-348, March 1993.\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructTanakaYamashitaEfficient7",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructTanakaYamashitaEfficient7",
    "category": "Function",
    "text": "On the Optimization of Some Nine-Stage Seventh-order Runge-Kutta Method, by M. Tanaka, S. Muramatsu and S. Yamashita, Information Processing Society of Japan, Vol. 33, No. 12 (1992) pages 1512-1526.\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructVernerRobust7",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructVernerRobust7",
    "category": "Function",
    "text": "From Verner's website\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructTanYam7",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructTanYam7",
    "category": "Function",
    "text": "On the Optimization of Some Nine-Stage Seventh-order Runge-Kutta Method, by M. Tanaka, S. Muramatsu and S. Yamashita, Information Processing Society of Japan, Vol. 33, No. 12 (1992) pages 1512-1526.\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructEnrightVerner7",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructEnrightVerner7",
    "category": "Function",
    "text": "The Relative Efficiency of Alternative Defect Control Schemes for High-Order Continuous Runge-Kutta Formulas  W. H. Enright SIAM Journal on Numerical Analysis, Vol. 30, No. 5. (Oct., 1993), pp. 1419-1445.\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructDormandPrince8",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructDormandPrince8",
    "category": "Function",
    "text": "constructDormandPrice8()\n\nConstructs the tableau object for the Dormand-Prince Order 6/8 method.\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructRKF8",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructRKF8",
    "category": "Function",
    "text": "constructRKF8()\n\nConstructs the tableau object for the Runge-Kutta-Fehlberg Order 7/8 method.\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructCooperVerner8",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructCooperVerner8",
    "category": "Function",
    "text": "Some Explicit Runge-Kutta Methods of High Order, by G. J. Cooper and J. H. Verner,  SIAM Journal on Numerical Analysis, Vol. 9, No. 3, (September 1972), pages 389 to 405\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructCooperVerner82",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructCooperVerner82",
    "category": "Function",
    "text": "Some Explicit Runge-Kutta Methods of High Order, by G. J. Cooper and J. H. Verner,  SIAM Journal on Numerical Analysis, Vol. 9, No. 3, (September 1972), pages 389 to 405\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructTsitourasPapakostas8",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructTsitourasPapakostas8",
    "category": "Function",
    "text": "Cheap Error Estimation for Runge-Kutta methods, by Ch. Tsitouras and S.N. Papakostas,  Siam Journal on Scientific Computing, Vol. 20, Issue 6, Nov 1999.\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructEnrightVerner8",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructEnrightVerner8",
    "category": "Function",
    "text": "The Relative Efficiency of Alternative Defect Control Schemes for High-Order Continuous Runge-Kutta Formulas  W. H. Enright SIAM Journal on Numerical Analysis, Vol. 30, No. 5. (Oct., 1993), pp. 1419-1445.\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructdverk78",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructdverk78",
    "category": "Function",
    "text": "Jim Verner's \"Maple\" (dverk78)\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructClassicVerner8",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructClassicVerner8",
    "category": "Function",
    "text": "EXPLICIT RUNGE-KUTFA METHODS WITH ESTIMATES OF THE LOCAL TRUNCATION ERROR\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructDormandPrince8_64bit",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructDormandPrince8_64bit",
    "category": "Function",
    "text": "constructDormandPrice8_64bit()\n\nConstructs the tableau object for the Dormand-Prince Order 6/8 method with the approximated coefficients from the paper. This works until below 64-bit precision.\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructCurtis8",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructCurtis8",
    "category": "Function",
    "text": "An Eighth Order Runge-Kutta process with Eleven Function Evaluations per Step, by A. R. Curtis,  Numerische Mathematik, Vol. 16, No. 3 (1970), pages 268 to 277\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructTsitPap8",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructTsitPap8",
    "category": "Function",
    "text": "Cheap Error Estimation for Runge-Kutta methods, by Ch. Tsitouras and S.N. Papakostas,  Siam Journal on Scientific Computing, Vol. 20, Issue 6, Nov 1999.\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructSharp9",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructSharp9",
    "category": "Function",
    "text": "Journal of Applied Mathematics & Decision Sciences, 4(2), 183-192 (2000),  \"High order explicit Runge-Kutta pairs for ephemerides of the Solar System and the Moon\".\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructTsitouras9",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructTsitouras9",
    "category": "Function",
    "text": "Optimized explicit Runge-Kutta pairs of order 9(8), by Ch. Tsitouras,  Applied Numerical Mathematics, 38 (2001) 123-134.\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructTsitouras92",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructTsitouras92",
    "category": "Function",
    "text": "Optimized explicit Runge-Kutta pairs of order 9(8), by Ch. Tsitouras,  Applied Numerical Mathematics, 38 (2001) 123-134.\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructVernerEfficient9",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructVernerEfficient9",
    "category": "Function",
    "text": "From Verner's Webiste\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructVern9",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructVern9",
    "category": "Function",
    "text": "From Verner's Webiste\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructVerner916",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructVerner916",
    "category": "Function",
    "text": "Verner 1991 First Order 5/6 method\n\nSome Ruge-Kutta Formula Pairs, by J.H.Verner,  SIAM Journal on Numerical Analysis, Vol. 28, No. 2 (April 1991), pages 496 to 511.\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructVerner9162",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructVerner9162",
    "category": "Function",
    "text": "Verner 1991 Second Order 5/6 method\n\nSome Ruge-Kutta Formula Pairs, by J.H.Verner,  SIAM Journal on Numerical Analysis, Vol. 28, No. 2 (April 1991), pages 496 to 511.\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructVernerRobust9",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructVernerRobust9",
    "category": "Function",
    "text": "From Verner's Webiste\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructFeagin10",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructFeagin10",
    "category": "Function",
    "text": "constructFeagin10\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructFeagin10Tableau",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructFeagin10Tableau",
    "category": "Function",
    "text": "Feagin10 in Tableau form\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructOno10",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructOno10",
    "category": "Function",
    "text": "Ono10\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructCurtis10",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructCurtis10",
    "category": "Function",
    "text": "High-order Explicit Runge-Kutta Formulae, Their uses, and Limitations, A.R.Curtis, J. Inst. Maths Applics (1975) 16, 35-55.\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructHairer10",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructHairer10",
    "category": "Function",
    "text": "A Runge-Kutta Method of Order 10, E. Hairer, J. Inst. Maths Applics (1978) 21, 47-59.\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructBaker10",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructBaker10",
    "category": "Function",
    "text": "Tom Baker, University of Teeside. Part of RK-Aid http://www.scm.tees.ac.uk/users/u0000251/research/researcht.htm http://www.scm.tees.ac.uk/users/u0000251/j.r.dormand/t.baker/rk10921m/rk10921m\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructFeagin12",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructFeagin12",
    "category": "Function",
    "text": "constructFeagin12\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructOno12",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructOno12",
    "category": "Function",
    "text": "On the 25 stage 12th order explicit Runge-Kutta method, by Hiroshi Ono. Transactions of the Japan Society for Industrial and applied Mathematics, Vol. 6, No. 3, (2006) pages 177 to 186\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructFeagin12Tableau",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructFeagin12Tableau",
    "category": "Function",
    "text": "Tableau form of Feagin12\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructFeagin14",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructFeagin14",
    "category": "Function",
    "text": "constructFeagin14\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructFeagin14Tableau",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructFeagin14Tableau",
    "category": "Function",
    "text": "Tableau form of Feagin14\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#Explicit-Tableaus-1",
    "page": "Solver Helpers",
    "title": "Explicit Tableaus",
    "category": "section",
    "text": "DifferentialEquations.constructEuler\nDifferentialEquations.constructRalston\nDifferentialEquations.constructHeun\nDifferentialEquations.constructKutta3\nDifferentialEquations.constructBS3\nDifferentialEquations.constructBogakiShampine3\nDifferentialEquations.constructRK4\nDifferentialEquations.constructRK438Rule\nDifferentialEquations.constructRKF4\nDifferentialEquations.constructRKF5\nDifferentialEquations.constructCashKarp\nDifferentialEquations.constructDormandPrince\nDifferentialEquations.constructBS5\nDifferentialEquations.constructPapakostasPapaGeorgiou5\nDifferentialEquations.constructPapakostasPapaGeorgiou52\nDifferentialEquations.constructTsitouras5\nDifferentialEquations.constructLutherKonen5\nDifferentialEquations.constructLutherKonen52\nDifferentialEquations.constructLutherKonen53\nDifferentialEquations.constructRungeFirst5\nDifferentialEquations.constructLawson5\nDifferentialEquations.constructSharpSmart5\nDifferentialEquations.constructBogakiShampine5\nDifferentialEquations.constructCassity5\nDifferentialEquations.constructButcher6\nDifferentialEquations.constructButcher62\nDifferentialEquations.constructButcher63\nDifferentialEquations.constructVernerRobust6\nDifferentialEquations.constructTanakaKasugaYamashitaYazaki6A\nDifferentialEquations.constructTanakaKasugaYamashitaYazaki6B\nDifferentialEquations.constructTanakaKasugaYamashitaYazaki6C\nDifferentialEquations.constructTanakaKasugaYamashitaYazaki6D\nDifferentialEquations.constructHuta6\nDifferentialEquations.constructHuta62\nDifferentialEquations.constructVerner6\nDifferentialEquations.constructDormandPrince6\nDifferentialEquations.constructSharpVerner6\nDifferentialEquations.constructVern6\nDifferentialEquations.constructClassicVerner6\nDifferentialEquations.constructChummund6\nDifferentialEquations.constructChummund62\nDifferentialEquations.constructPapakostas6\nDifferentialEquations.constructLawson6\nDifferentialEquations.constructTsitourasPapakostas6\nDifferentialEquations.constructDormandLockyerMcCorriganPrince6\nDifferentialEquations.constructVernerEfficient6\nDifferentialEquations.constructMikkawyEisa\nDifferentialEquations.constructVernerEfficient7\nDifferentialEquations.constructClassicVerner7\nDifferentialEquations.constructSharpVerner7\nDifferentialEquations.constructTanakaYamashitaStable7\nDifferentialEquations.constructSharpSmart7\nDifferentialEquations.constructTanakaYamashitaEfficient7\nDifferentialEquations.constructVernerRobust7\nDifferentialEquations.constructTanYam7\nDifferentialEquations.constructEnrightVerner7\nDifferentialEquations.constructDormandPrince8\nDifferentialEquations.constructRKF8\nDifferentialEquations.constructCooperVerner8\nDifferentialEquations.constructCooperVerner82\nDifferentialEquations.constructTsitourasPapakostas8\nDifferentialEquations.constructEnrightVerner8\nDifferentialEquations.constructdverk78\nDifferentialEquations.constructClassicVerner8\nDifferentialEquations.constructDormandPrince8_64bit\nDifferentialEquations.constructCurtis8\nDifferentialEquations.constructTsitPap8\nDifferentialEquations.constructSharp9\nDifferentialEquations.constructTsitouras9\nDifferentialEquations.constructTsitouras92\nDifferentialEquations.constructVernerEfficient9\nDifferentialEquations.constructVern9\nDifferentialEquations.constructVerner916\nDifferentialEquations.constructVerner9162\nDifferentialEquations.constructVernerRobust9\nDifferentialEquations.constructFeagin10\nDifferentialEquations.constructFeagin10Tableau\nDifferentialEquations.constructOno10\nDifferentialEquations.constructCurtis10\nDifferentialEquations.constructHairer10\nDifferentialEquations.constructBaker10\nDifferentialEquations.constructFeagin12\nDifferentialEquations.constructOno12\nDifferentialEquations.constructFeagin12Tableau\nDifferentialEquations.constructFeagin14\nDifferentialEquations.constructFeagin14Tableau"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructImplicitEuler",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructImplicitEuler",
    "category": "Function",
    "text": "Implicit Euler Method\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructMidpointRule",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructMidpointRule",
    "category": "Function",
    "text": "Order 2 Midpoint Method\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructTrapezoidalRule",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructTrapezoidalRule",
    "category": "Function",
    "text": "Order 2 Trapezoidal Rule (LobattoIIIA2)\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructLobattoIIIA4",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructLobattoIIIA4",
    "category": "Function",
    "text": "LobattoIIIA Order 4 method\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructLobattoIIIB2",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructLobattoIIIB2",
    "category": "Function",
    "text": "LobattoIIIB Order 2 method\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructLobattoIIIB4",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructLobattoIIIB4",
    "category": "Function",
    "text": "LobattoIIIB Order 4 method\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructLobattoIIIC2",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructLobattoIIIC2",
    "category": "Function",
    "text": "LobattoIIIC Order 2 method\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructLobattoIIIC4",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructLobattoIIIC4",
    "category": "Function",
    "text": "LobattoIIIC Order 4 method\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructLobattoIIICStar2",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructLobattoIIICStar2",
    "category": "Function",
    "text": "LobattoIIIC* Order 2 method\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructLobattoIIICStar4",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructLobattoIIICStar4",
    "category": "Function",
    "text": "LobattoIIIC* Order 4 method\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructLobattoIIID2",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructLobattoIIID2",
    "category": "Function",
    "text": "LobattoIIID Order 2 method\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructLobattoIIID4",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructLobattoIIID4",
    "category": "Function",
    "text": "LobattoIIID Order 4 method\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructGL2",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructGL2",
    "category": "Function",
    "text": "Gauss-Legendre Order 2.\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructGL4",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructGL4",
    "category": "Function",
    "text": "Gauss-Legendre Order 4.\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructGL6",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructGL6",
    "category": "Function",
    "text": "Gauss-Legendre Order 6.\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructRadauIA3",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructRadauIA3",
    "category": "Function",
    "text": "RadauIA Order 3 method\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructRadauIA5",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructRadauIA5",
    "category": "Function",
    "text": "RadauIA Order 5 method\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructRadauIIA3",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructRadauIIA3",
    "category": "Function",
    "text": "RadauIIA Order 3 method\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructRadauIIA5",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructRadauIIA5",
    "category": "Function",
    "text": "RadauIIA Order 5 method\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#Implicit-Tableaus-1",
    "page": "Solver Helpers",
    "title": "Implicit Tableaus",
    "category": "section",
    "text": "DifferentialEquations.constructImplicitEuler\nDifferentialEquations.constructMidpointRule\nDifferentialEquations.constructTrapezoidalRule\nDifferentialEquations.constructLobattoIIIA4\nDifferentialEquations.constructLobattoIIIB2\nDifferentialEquations.constructLobattoIIIB4\nDifferentialEquations.constructLobattoIIIC2\nDifferentialEquations.constructLobattoIIIC4\nDifferentialEquations.constructLobattoIIICStar2\nDifferentialEquations.constructLobattoIIICStar4\nDifferentialEquations.constructLobattoIIID2\nDifferentialEquations.constructLobattoIIID4\nDifferentialEquations.constructGL2\nDifferentialEquations.constructGL4\nDifferentialEquations.constructGL6\nDifferentialEquations.constructRadauIA3\nDifferentialEquations.constructRadauIA5\nDifferentialEquations.constructRadauIIA3\nDifferentialEquations.constructRadauIIA5"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.monteCarloSim",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.monteCarloSim",
    "category": "Function",
    "text": "monteCarloSim(Δt::Number,prob::SDEProblem)\n\nPerforms a parallel Monte-Carlo simulation to solve the SDE problem with Δt numMonte times. Returns a vector of solution objects.\n\nKeyword Arguments\n\nT - Final time. Default is 1.\nnumMonte - Number of Monte-Carlo simulations to run. Default is 10000\nsave_timeseries - Denotes whether save_timeseries should be turned on in each run. Default is true.\nalg - Algorithm for solving the SDEs. Default is \"EM\"\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.RosslerSRI",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.RosslerSRI",
    "category": "Type",
    "text": "RosslerSRI\n\nHolds the Butcher tableaus for a Rosser SRI method.\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.RosslerSRA",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.RosslerSRA",
    "category": "Type",
    "text": "RosslerSRA\n\nHolds the Butcher tableaus for a Rosser SRA method.\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructSRA1",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructSRA1",
    "category": "Function",
    "text": "constructSRA1()\n\nConstructs the taleau type for the SRA1 method.\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.constructSRIW1",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.constructSRIW1",
    "category": "Function",
    "text": "constructSRIW1()\n\nConstructs the tableau type for the SRIW1 method.\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.checkSRAOrder",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.checkSRAOrder",
    "category": "Function",
    "text": "checkSRAOrder(RosslerSRI)\n\nDetermines whether the order conditions are met via the tableaus of the SRA method.\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.checkSRIOrder",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.checkSRIOrder",
    "category": "Function",
    "text": "checkSRIOrder(RosslerSRI)\n\nDetermines whether the order conditions are met via the tableaus of the SRI method.\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#SDE-Solver-Extras-1",
    "page": "Solver Helpers",
    "title": "SDE Solver Extras",
    "category": "section",
    "text": "DifferentialEquations.monteCarloSim\nDifferentialEquations.RosslerSRI\nDifferentialEquations.RosslerSRA\nDifferentialEquations.constructSRA1\nDifferentialEquations.constructSRIW1\nDifferentialEquations.checkSRAOrder\nDifferentialEquations.checkSRIOrder"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.GSδq!",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.GSδq!",
    "category": "Function",
    "text": "GSδq!(δq,rp,Δxs)\n\nPerforms a Gauss-Seidel iteration for δq.\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.GSu!",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.GSu!",
    "category": "Function",
    "text": "GSu!(u,f₁,Δxs,p,ugD,grids,ux,uy)\n\nPerforms a Gauss-Seidel iteration on u.\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.calc_rp!",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.calc_rp!",
    "category": "Function",
    "text": "calc_rp!(rp,u,v,Δxs,g,px,py)\n\nCalculates the rp from the u and v's.\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.update_p!",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.update_p!",
    "category": "Function",
    "text": "update_p!(p,δq,Δxs)\n\nUpdates p given δq\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.update_v!",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.update_v!",
    "category": "Function",
    "text": "update_v!(v,δq,Δxs)\n\nUpdates v given δq\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.uzawa_p!",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.uzawa_p!",
    "category": "Function",
    "text": "uzawa_p!(p,u,v,Δxs,g,px,py)\n\nSolves for p from u and v using an Uzawa update.\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.stokes_restriction",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.stokes_restriction",
    "category": "Function",
    "text": "stokes_restriction(u,v,p,Δxs,grids,mins,maxs,ugD,vgD)\n\nRestricts the Stokes problem to the coarsegrid.\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.stokes_prolongation",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.stokes_prolongation",
    "category": "Function",
    "text": "stokes_prolongation(u,v,p,Δxs,grids,mins,maxs,ugD,vgD)\n\nProlongates the Stokes problem to the fine grid\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.update_u!",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.update_u!",
    "category": "Function",
    "text": "update_u!(u,δq,Δxs)\n\nUpdates u given δq\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.GSv!",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.GSv!",
    "category": "Function",
    "text": "GSv!(v,f₂,Δxs,p,vgD,grids,vx,vy)\n\nPerforms a Gauss-Seidel iteration on v.\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#Stationary-Stokes-1",
    "page": "Solver Helpers",
    "title": "Stationary Stokes",
    "category": "section",
    "text": "DifferentialEquations.GSδq!\nDifferentialEquations.GSu!\nDifferentialEquations.calc_rp!\nDifferentialEquations.update_p!\nDifferentialEquations.update_v!\nDifferentialEquations.uzawa_p!\nDifferentialEquations.stokes_restriction\nDifferentialEquations.stokes_prolongation\nDifferentialEquations.update_u!\nDifferentialEquations.GSv!"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.meshgrid",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.meshgrid",
    "category": "Function",
    "text": "meshgrid(vx)\n\nComputes an (x,y)-grid from the vectors (vx,vx). For more information, see the MATLAB documentation.\n\n\n\nmeshgrid(vx,vy)\n\nComputes an (x,y)-grid from the vectors (vx,vy). For more information, see the MATLAB documentation.\n\n\n\nmeshgrid(vx,vy,vz)\n\nComputes an (x,y,z)-grid from the vectors (vx,vy,vz). For more information, see the MATLAB documentation.\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.accumarray",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.accumarray",
    "category": "Function",
    "text": "accumarray(subs, val, sz=(maximum(subs),))\n\nSee MATLAB's documentation for more details.\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#DifferentialEquations.@materialize",
    "page": "Solver Helpers",
    "title": "DifferentialEquations.@materialize",
    "category": "Macro",
    "text": "Splats keys from a dict into variables\n\n@materialize a, b, c = dict\n\n\n\n"
},

{
    "location": "internals/solver_helpers.html#Extras-1",
    "page": "Solver Helpers",
    "title": "Extras",
    "category": "section",
    "text": "DifferentialEquations.meshgrid\nDifferentialEquations.accumarray\nDifferentialEquations.@materialize"
},

{
    "location": "internals/notes_on_algorithms.html#",
    "page": "Notes on Algorithms",
    "title": "Notes on Algorithms",
    "category": "page",
    "text": ""
},

{
    "location": "internals/notes_on_algorithms.html#Notes-on-Algorithms-1",
    "page": "Notes on Algorithms",
    "title": "Notes on Algorithms",
    "category": "section",
    "text": "This page is a supplemental page which details some facts about the chosen algorithms, why some I took the time to make optimized versions for, and for others why they were ignored."
},

{
    "location": "internals/notes_on_algorithms.html#Explicit-Runge-Kutta-ODE-Algorithms-1",
    "page": "Notes on Algorithms",
    "title": "Explicit Runge-Kutta ODE Algorithms",
    "category": "section",
    "text": "From what I can tell, this is by far the most comprehensive comparison of Explicit Runge-Kutta ODE algorithms that you'll find."
},

{
    "location": "internals/notes_on_algorithms.html#Implementations-1",
    "page": "Notes on Algorithms",
    "title": "Implementations",
    "category": "section",
    "text": "The different implementations have been benchmarked against each other. The efficiency was calculated by weighing both the time and error on classic test problems. To make clear distinctions, solver options were tweaked to many different settings, including:Matching errors\nMatching runtimes\nMatching settings\nLow/High toleranceThe DifferentialEquations.jl implementations of the explicit Runge-Kutta solvers are by a good margin the most efficient implementations of the given algorithms. They utilize many extra tricks, nice caching, and threading if available, to vastly outperform the other methods in terms of efficiency (even with threading disabled). :DP5 performs much better than :dopri5, which vastly outperform ode45 (whose stepsize algorithm tends to have issues on some quasi-stiff problems). :DP8 performs better than dop853 in some cases, worse in others. Both vastly outperform ode78.For this reason, the DifferentialEquations.jl non-stiff algorithms are the recommended implementations. ODEInterface non-stiff algorithms are only recommended for historical purposes (i.e. to match previous results) or to try dop853 on a problem (work is being to find out what the difference is and squash the competition here!). The ODE.jl algorithms are not recommended for any serious use (the package is essentially deprecated: it's slow, gets high error, the timestepping algorithm is not robust, and doesn't implement many methods)."
},

{
    "location": "internals/notes_on_algorithms.html#Order-4-1",
    "page": "Notes on Algorithms",
    "title": "Order 4-",
    "category": "section",
    "text": "At this stage, coefficient of the truncation error seems to win out, or you are willing to live with low tolerance anyways. Thus Bogacki-Shampine is the clear winner in this category because at order 2/3 with FASL it has minimal numbers of function evaluations but also is stable enough to step as needed. All other methods don't compare because of the FASL property boosting the order and thus the stability (for low orders, it pretty much holds that higher order = higher stability (for optimal number of steps), which is not true as we go higher), making it more stable and have less error for lower numbers of function evaluations than the others in this category."
},

{
    "location": "internals/notes_on_algorithms.html#Order-5-1",
    "page": "Notes on Algorithms",
    "title": "Order 5",
    "category": "section",
    "text": "[Note that for all of these Peter Stone's modifications do not seem to be helpful since, although they lower the truncation error, they also modify the stability region in ways that can be worrisome (mostly they shrink the stability in the complex axis near the origin, making the problems not as suitable for a \"general purpose default\" like one would hope with a 4/5 solver)]The \"clear choice\" is the Dormand-Prince 4/5 pair. This is the pair which is used by default as ode45 in MATLAB, and serves similar functions in scipy, ODE.jl, etc. The golden standard implementation is Hairer's DOPRI5 (offered by ODEInterface.jl). After optimizations, DifferentialEquations.jl's native DP5 solver is much more efficient (between 4x-400x) than DOPRI5's, with various design choices factoring into this (which are documented in the benchmarks). This is pre-threading, and within method threading will likely be at least doubled or tripled when threading is enabled. Thus it's clear that the reference implementation to try other methods against is the DifferentialEquations.jl DP5 method.It's obvious that anything before Dormand-Prince 4/5's pair is simply not as good because of the optimizations on the local truncation error coefficient and the fact that FASL schemes essentially have one less function evaluation. So the previous algorithms were implemented as tableaus for the historical reasons but dealt with no further. These methods include the Runge, Cassity, Butcher, Fehlburg, Lawson, Luther and Konen, and Kutta schemes.The next set of schemes are the Papakostas-Papageorgiou schemes. The problem is that they don't really get the much lower on the error than DP5, but also have wacky stability near the origin.Tsitouras's looks to be a good match against DP5 as a 6-stage scheme to take on DP5. Its stability is similar to DP5 but its first error term is an order of magnitude smaller. More tests will likely determine that this is much better than DP5 in accordance with his paper.Lastly, there are the 7-stage schemes. The more recent one is due to Sharp and Smart, but I am ignoring this because its error term is almost an order of magnitude larger than the BS pair, and its stability region is wonky near the origin. Its only plus over the BS pair is that it has a slightly larger stability in the real axis, which is not important when paired with adaptive stepping and for use on non-stiff problems.That leaves us with the Bogacki-Shampine pair. This pair gets more than an order of magnitude lower truncation error, enhanced complex stability, and two error estimators to make it more robust. In fact, this is the default which is chosen in Mathematica. Its downside is that since it is an 8-stage scheme, it requires an additional function evaluation.Further tests will likely narrow this down to Tsitouras vs Bogacki-Shampine. Who will come out on top? Who knows."
},

{
    "location": "internals/notes_on_algorithms.html#Order-6-1",
    "page": "Notes on Algorithms",
    "title": "Order 6",
    "category": "section",
    "text": "Sharp-Verner has bad complex stability near the origin. I don't like any of the Peter Stone modifications here. Butcher and Chummund methods have stability issues near the origin as well. Huta's method has too high of an error coefficient. Verner's 1991 has bad complex stability. Same as the most robust. The Verner \"most efficient\" has really good stability and error coefficient. In fact, nothing is even close except for Tsitouras' method. The DP method is two orders of magnitude higher in error coefficient than Verner. The Luther methods have too much error. Same as Tsitouras-Papakostas and  M. Tanaka, K. Kasuga, S. Yamashita and H. Yazaki.Without a doubt the winner is the Verner \"most efficient\"."
},

{
    "location": "internals/notes_on_algorithms.html#Order-7-1",
    "page": "Notes on Algorithms",
    "title": "Order 7",
    "category": "section",
    "text": "The Enright-Verner and other Verner methods all have stability issues near the origin in the complex plane and higher error coefficients. Sharp and Smart have higher error coefficients. Peter Stone's methods all have higher error. It's very clear that the best here is the Tanaka-Yamashita (efficient, not the stable) method by far."
},

{
    "location": "internals/notes_on_algorithms.html#Order-8-1",
    "page": "Notes on Algorithms",
    "title": "Order 8",
    "category": "section",
    "text": "The Cooper-Verner methods do not have an error estimate and so no adaptive timestepping can be done. This is a deal-breaker. Going into this one would think that the clear winner would be Dormand-Prince 8. But that's not the case. However, that's comparing the classical 1981 DP87. Notice that the code for Dop853 is based off of the 1989 paper which has different coefficients (and currently I have no analysis for this).The other methods include Verner's Maple dverk78 which is bested in both stability and error coefficient by Enright-Verner which is bested by Tsitouras-Papakostas.Thus the final showdown is between DP853 vs the Tsitouras-Papakostas pair."
},

{
    "location": "internals/notes_on_algorithms.html#Order-9-1",
    "page": "Notes on Algorithms",
    "title": "Order 9",
    "category": "section",
    "text": "The Tsitouras scheme and the Sharp scheme have funky stability near the origin. Verner's schemes are much safer, and with similar error. They clearly dominate this category."
},

{
    "location": "internals/notes_on_algorithms.html#Order-10-1",
    "page": "Notes on Algorithms",
    "title": "Order 10",
    "category": "section",
    "text": "Curtis' scheme has more function evaluations than needed, and Peter Stone's modification reduces the truncation error by a lot but adds three more function evaluations. Thus Hairer's 17 stage scheme (whose error and stability is similar to Curtis') is clearly better. Once again Peter Stone's modification adds three steps but does not reduce the truncation error here, so the unmodified version does better.Tom Baker's method increases the stability region to something which is more than necessary but adds 4 function evaluations to do so (without lowering the error very much). Ono's scheme minimizes the error more than Hairer's here, with all else being basically the same. The Peter Stone methods add a lot of function evaluations (5+) and so they would only be useful in the case where the function evaluations are quick yet you still want really small error. Even then I'm not convinced they are better than the other methods, or better than the higher order methods which use less steps. The stability is only okay.The Feagin scheme is fine, but with more error and less stability than the Hairer scheme. Thus it seems clear that Hairer's method dominates this category. However, that's only because it does not include an error estimate. Feagin's scheme is close in error and stability, but includes an error estimate which can be used for adaptivity, making it the choice in this category."
},

{
    "location": "internals/notes_on_algorithms.html#Order-11-1",
    "page": "Notes on Algorithms",
    "title": "Order 11",
    "category": "section",
    "text": "The order 11 schemes are due to Tom Baker at the University of Teeside. They have a nice sparsity pattern and receive slightly lower truncation error coefficents than the Feagin, but Feagin's dominates by being \"almost order 13\" anyways so while a nice try the order 11 scheme is likely overwhelmed in any case where it would be useful."
},

{
    "location": "internals/notes_on_algorithms.html#Order-12-1",
    "page": "Notes on Algorithms",
    "title": "Order 12",
    "category": "section",
    "text": "Here there are the Feagin schemes and Ono's scheme. Ono's scheme gets horrible stability with more error and so it's not in the running. Peter Stone's modifications do not make a substantive change, and where they do they get rid of the nice property that the Feagin 12 method satisfies many of the higher order conditions as well, making it look even higher order on some problems. Thus the standard Feagin 12 seems to win out in this category."
},

{
    "location": "internals/notes_on_algorithms.html#Order-14-1",
    "page": "Notes on Algorithms",
    "title": "Order 14",
    "category": "section",
    "text": "In this category there is just the Feagin. Peter Stone's modification barely changes anything in the analysis so I did not even attempt it."
},

]}
