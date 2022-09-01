"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2219],{3146:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>u,toc:()=>d});var o=n(3117),r=(n(7294),n(3905)),s=n(7634),i=n.n(s);const a={title:"Z3 JavaScript",sidebar_position:1},l=void 0,u={unversionedId:"Z3 JavaScript Examples",id:"Z3 JavaScript Examples",title:"Z3 JavaScript",description:"The Z3 distribution comes with TypeScript (and therefore JavaScript) bindings for Z3.",source:"@site/docs-programming/01 - Z3 JavaScript Examples.md",sourceDirName:".",slug:"/Z3 JavaScript Examples",permalink:"/z3guide/programming/Z3 JavaScript Examples",draft:!1,editUrl:"https://github.com/rlisahuang/z3guide/tree/main/website/docs-programming/01 - Z3 JavaScript Examples.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Z3 JavaScript",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Introduction",permalink:"/z3guide/programming/Z3 Python - Readonly/Introduction"}},c={},d=[{value:"Warmup",id:"warmup",level:2},{value:"Propositional Logic",id:"propositional-logic",level:2},{value:"Integer Arithmetic",id:"integer-arithmetic",level:2},{value:"Dogs, cats and mice",id:"dogs-cats-and-mice",level:3},{value:"Uninterpreted Functions",id:"uninterpreted-functions",level:2},{value:"Prove <code>x = y implies g(x) = g(y)</code>",id:"prove-x--y-implies-gx--gy",level:3},{value:"Disprove <code>x = y implies g(g(x)) = g(y)</code>",id:"disprove-x--y-implies-ggx--gy",level:3},{value:"Prove <code>x = y implies g(x) = g(y)</code>",id:"prove-x--y-implies-gx--gy-1",level:3},{value:"Disprove that <code>x = y implies g(g(x)) = g(y)</code>",id:"disprove-that-x--y-implies-ggx--gy",level:3},{value:"Solve sudoku",id:"solve-sudoku",level:2},{value:"Arithmetic over Reals",id:"arithmetic-over-reals",level:2},{value:"Non-linear arithmetic",id:"non-linear-arithmetic",level:2},{value:"Bit-vectors",id:"bit-vectors",level:2},{value:"Using Z3 objects wrapped in JavaScript",id:"using-z3-objects-wrapped-in-javascript",level:2}],p={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Z3 distribution comes with TypeScript (and therefore JavaScript) bindings for Z3.\nIn the following we give a few examples of using Z3 through these bindings.\nYou can run and modify the examples locally in your browser."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The bindings do not support all features of z3. For example, you cannot (yet) create array expressions in the same way\nthat you can create arithmetic expressions. The JavaScript bindings have the distinct advantage that they allow to use\nz3 directly in your browser with minimal extra dependencies.")),(0,r.kt)("h2",{id:"warmup"},"Warmup"),(0,r.kt)("p",null,"We use a collection of basic examples to illustrate the bindings.\nThe first example is a formula that establishes that there is no number both above 9 and below 10:"),(0,r.kt)(i(),{input:{lang:"z3-js",highlight:"typescript",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:"const x = Z3.Int.const('x');\nZ3.solve(Z3.And(x.ge(10), x.le(9)));",result:{output:"unsat",error:"",status:"z3-ran",hash:"7673f8bb4aa2fbc8bdeade05430d9d6d99946f3a"},githubRepo:"Z3Prover/z3",editable:!1,readonly:!1,showLineNumbers:!0,langVersion:"4.11.0",tool:"z3-solver"},mdxType:"CustomCodeBlock"}),(0,r.kt)("p",null,"We note that the JavaScript bindings wrap z3 expressions into JavaScript options that support methods for building new expressions.\nFor example, the method ",(0,r.kt)("inlineCode",{parentName:"p"},"ge")," is available on an arithmetic expression ",(0,r.kt)("inlineCode",{parentName:"p"},"a"),". It takes one argument ",(0,r.kt)("inlineCode",{parentName:"p"},"b")," and returns\nand expression corresponding to the predicate ",(0,r.kt)("inlineCode",{parentName:"p"},"a >= b"),".\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"Z3.solve")," method takes a sequence of predicates and checks if there is a solution. If there is a solution, it returns a model."),(0,r.kt)("h2",{id:"propositional-logic"},"Propositional Logic"),(0,r.kt)("p",null,"Prove De Morgan's Law"),(0,r.kt)(i(),{input:{lang:"z3-js",highlight:"typescript",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:"const [x, y] = [Z3.Bool.const('x'), Z3.Bool.const('y')];\nconst conjecture = Z3.Eq(Z3.Not(Z3.And(x, y)), Z3.Or(Z3.Not(x), Z3.Not(y)));\nZ3.solve(Z3.Not(conjecture))",result:{output:"unsat",error:"",status:"z3-ran",hash:"b7778985281545bfc05645d4fc846e55a7229642"},githubRepo:"Z3Prover/z3",editable:!1,readonly:!1,showLineNumbers:!0,langVersion:"4.11.0",tool:"z3-solver"},mdxType:"CustomCodeBlock"}),(0,r.kt)("p",null,"What not to wear? It is well-known that developers of SAT solvers have difficulties looking sharp.\nThey like to wear some combination of shirt and tie, but can't wear both. What should a SAT solver developer wear?"),(0,r.kt)(i(),{input:{lang:"z3-js",highlight:"typescript",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:"const [tie, shirt] = [Z3.Bool.const('tie'), Z3.Bool.const('shirt')];\nZ3.solve(Z3.Or(tie, shirt), Z3.Implies(tie, shirt), Z3.Or(Z3.Not(tie), Z3.Not(shirt)))",result:{output:"(define-fun tie () Bool\n  false)\n(define-fun shirt () Bool\n  true)",error:"",status:"z3-ran",hash:"798475c5be529e18e1cff5c8eae97e65328b919a"},githubRepo:"Z3Prover/z3",editable:!1,readonly:!1,showLineNumbers:!0,langVersion:"4.11.0",tool:"z3-solver"},mdxType:"CustomCodeBlock"}),(0,r.kt)("h2",{id:"integer-arithmetic"},"Integer Arithmetic"),(0,r.kt)("p",null,"solve ",(0,r.kt)("inlineCode",{parentName:"p"},"x > 2 and y < 10 and x + 2y = 7")),(0,r.kt)(i(),{input:{lang:"z3-js",highlight:"typescript",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:"const x = Z3.Int.const('x');\nconst y = Z3.Int.const('y');\nZ3.solve(x.gt(2), y.lt(10), x.add(y.mul(2)).eq(7))",result:{output:"(define-fun y () Int\n  0)\n(define-fun x () Int\n  7)",error:"",status:"z3-ran",hash:"14790dad035afe5ef8753f1430f95b097ecbfe53"},githubRepo:"Z3Prover/z3",editable:!1,readonly:!1,showLineNumbers:!0,langVersion:"4.11.0",tool:"z3-solver"},mdxType:"CustomCodeBlock"}),(0,r.kt)("h3",{id:"dogs-cats-and-mice"},"Dogs, cats and mice"),(0,r.kt)("p",null,"Given 100 dollars, the puzzle asks if it is possible to buy 100 animals\nbased on their prices that are 15, 1, and 0.25 dollars, respectively."),(0,r.kt)(i(),{input:{lang:"z3-js",highlight:"typescript",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:"\n// Create 3 integer variables\n\nconst dog = Z3.Int.const('dog')\nconst cat = Z3.Int.const('cat')\nconst mouse = Z3.Int.const('mouse')\n\nZ3.solve(\n// there is at least one dog, one cat, and one mouse\n   dog.ge(1), cat.ge(1), mouse.ge(1),\n   \n// we want to buy 100 animals\n   dog.add(cat.add(mouse)).eq(100),\n   \n// We have 100 dollars (10000 cents):\n// dogs cost 15 dollars (1500 cents),\n// cats cost 1 dollar (100 cents), and\n// mice cost 25 cents\n(dog.mul(1500)).add(cat.mul(100)).add(mouse.mul(25)).eq(10000));\n",result:{output:"(define-fun mouse () Int\n  56)\n(define-fun cat () Int\n  41)\n(define-fun dog () Int\n  3)",error:"",status:"z3-ran",hash:"3b11f2524457e63fc8c449ea8edaa91d2ab0bc33"},githubRepo:"Z3Prover/z3",editable:!1,readonly:!1,showLineNumbers:!0,langVersion:"4.11.0",tool:"z3-solver"},mdxType:"CustomCodeBlock"}),(0,r.kt)("h2",{id:"uninterpreted-functions"},"Uninterpreted Functions"),(0,r.kt)("p",null,"The method ",(0,r.kt)("inlineCode",{parentName:"p"},"call")," is used to build expressions by applying the function node to arguments."),(0,r.kt)("h3",{id:"prove-x--y-implies-gx--gy"},"Prove ",(0,r.kt)("inlineCode",{parentName:"h3"},"x = y implies g(x) = g(y)")),(0,r.kt)(i(),{input:{lang:"z3-js",highlight:"typescript",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:"const sort = Z3.Int.sort();\nconst x = Z3.Int.const('x');\nconst y = Z3.Int.const('y');\nconst g = Z3.Function.declare('g', sort, sort);\nconst conjecture = Z3.Implies(x.eq(y), g.call(x).eq(g.call(y)));\nZ3.solve(Z3.Not(conjecture));",result:{output:"unsat",error:"",status:"z3-ran",hash:"3bb2d38c0419b9534d8edd9d3b83fc61f611c9fe"},githubRepo:"Z3Prover/z3",editable:!1,readonly:!1,showLineNumbers:!0,langVersion:"4.11.0",tool:"z3-solver"},mdxType:"CustomCodeBlock"}),(0,r.kt)("h3",{id:"disprove-x--y-implies-ggx--gy"},"Disprove ",(0,r.kt)("inlineCode",{parentName:"h3"},"x = y implies g(g(x)) = g(y)")),(0,r.kt)("p",null,"we illustrate the use of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Solver")," object in the following example. Instead of calling ",(0,r.kt)("inlineCode",{parentName:"p"},"Z3.solve"),"\nwe here create a solver object and add assertions to it. The ",(0,r.kt)("inlineCode",{parentName:"p"},"solver.check()")," method is used to check\nsatisfiability (we expect the result to be ",(0,r.kt)("inlineCode",{parentName:"p"},"sat")," for this example). The method ",(0,r.kt)("inlineCode",{parentName:"p"},"solver.model()")," is used to retrieve a model."),(0,r.kt)(i(),{input:{lang:"z3-js",highlight:"typescript",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:"const solver = new Z3.Solver();\nconst sort = Z3.Int.sort();\nconst x = Z3.Int.const('x');\nconst y = Z3.Int.const('y');\nconst g = Z3.Function.declare('g', sort, sort);\nconst conjecture = Z3.Implies(x.eq(y), g.call(g.call(x)).eq(g.call(y)));\nsolver.add(Z3.Not(conjecture));\nawait solver.check()\nsolver.model()",result:{output:"(define-fun y () Int\n  0)\n(define-fun x () Int\n  0)\n(define-fun g ((x!0 Int)) Int\n  (ite (= x!0 1) 2\n    1))",error:"",status:"z3-ran",hash:"cf0670b3ecfcd5576bf873a712fccee01f208f79"},githubRepo:"Z3Prover/z3",editable:!1,readonly:!1,showLineNumbers:!0,langVersion:"4.11.0",tool:"z3-solver"},mdxType:"CustomCodeBlock"}),(0,r.kt)("h3",{id:"prove-x--y-implies-gx--gy-1"},"Prove ",(0,r.kt)("inlineCode",{parentName:"h3"},"x = y implies g(x) = g(y)")),(0,r.kt)(i(),{input:{lang:"z3-js",highlight:"typescript",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:"const sort = Z3.Int.sort();\nconst x = Z3.Int.const('x');\nconst y = Z3.Int.const('y');\nconst g = Z3.Function.declare('g', sort, sort);\nconst conjecture = Z3.Implies(x.eq(y), g.call(x).eq(g.call(y)));\nZ3.solve(Z3.Not(conjecture));",result:{output:"unsat",error:"",status:"z3-ran",hash:"3bb2d38c0419b9534d8edd9d3b83fc61f611c9fe"},githubRepo:"Z3Prover/z3",editable:!1,readonly:!1,showLineNumbers:!0,langVersion:"4.11.0",tool:"z3-solver"},mdxType:"CustomCodeBlock"}),(0,r.kt)("h3",{id:"disprove-that-x--y-implies-ggx--gy"},"Disprove that ",(0,r.kt)("inlineCode",{parentName:"h3"},"x = y implies g(g(x)) = g(y)")),(0,r.kt)(i(),{input:{lang:"z3-js",highlight:"typescript",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:"const sort = Z3.Int.sort();\nconst x = Z3.Int.const('x');\nconst y = Z3.Int.const('y');\nconst g = Z3.Function.declare('g', sort, sort);\nconst conjecture = Z3.Implies(x.eq(y), g.call(g.call(x)).eq(g.call(y)));\nZ3.solve(Z3.Not(conjecture));",result:{output:"(define-fun y () Int\n  0)\n(define-fun x () Int\n  0)\n(define-fun g ((x!0 Int)) Int\n  (ite (= x!0 1) 2\n    1))",error:"",status:"z3-ran",hash:"1d9f6f55404684682a250995ccb4e4898d64a2bc"},githubRepo:"Z3Prover/z3",editable:!1,readonly:!1,showLineNumbers:!0,langVersion:"4.11.0",tool:"z3-solver"},mdxType:"CustomCodeBlock"}),(0,r.kt)("h2",{id:"solve-sudoku"},"Solve sudoku"),(0,r.kt)("p",null,"The popular Sudoko can be solved. "),(0,r.kt)(i(),{input:{lang:"z3-js",highlight:"typescript",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:"function toSudoku(data: string): (number | null)[][] {\n    const cells: (number | null)[][] = Array.from({ length: 9 }, () => Array.from({ length: 9 }, () => null));\n\n    const lines = data.trim().split('\\n');\n    for (let row = 0; row < 9; row++) {\n        const line = lines[row].trim();\n        for (let col = 0; col < 9; col++) {\n            const char = line[col];\n            if (char !== '.') {\n                cells[row][col] = Number.parseInt(char);\n            }\n        }\n    }\n    return cells;\n}\n\nconst INSTANCE = toSudoku(`\n....94.3.\n...51...7\n.89....4.\n......2.8\n.6.2.1.5.\n1.2......\n.7....52.\n9...65...\n.4.97....\n`);\n\n\nconst cells = [];\n// 9x9 matrix of integer variables\nfor (let i = 0; i < 9; i++) {\n    const row = [];\n    for (let j = 0; j < 9; j++) {\n        row.push(Z3.Int.const(`x_${i}_${j}`));\n    }\n    cells.push(row);\n}\n\nconst solver = new Z3.Solver();\n\n// each cell contains a value 1<=x<=9\nfor (let i = 0; i < 9; i++) {\n    for (let j = 0; j < 9; j++) {\n        solver.add(cells[i][j].ge(1), cells[i][j].le(9));\n    }\n}\n\n// each row contains a digit only once\nfor (let i = 0; i < 9; i++) {\n    solver.add(Z3.Distinct(...cells[i]));\n}\n\n// each column contains a digit only once\nfor (let j = 0; j < 9; j++) {\n    const column = [];\n    for (let i = 0; i < 9; i++) {\n        column.push(cells[i][j]);\n    }\n    solver.add(Z3.Distinct(...column));\n}\n\n// each 3x3 contains a digit at most once\nfor (let iSquare = 0; iSquare < 3; iSquare++) {\n    for (let jSquare = 0; jSquare < 3; jSquare++) {\n        const square = [];\n\n        for (let i = iSquare * 3; i < iSquare * 3 + 3; i++) {\n            for (let j = jSquare * 3; j < jSquare * 3 + 3; j++) {\n                square.push(cells[i][j]);\n            }\n        }\n\n        solver.add(Z3.Distinct(...square));\n    }\n}\n\nfor (let i = 0; i < 9; i++) {\n    for (let j = 0; j < 9; j++) {\n        const digit = INSTANCE[i][j];\n        if (digit !== null) {\n            solver.add(cells[i][j].eq(digit));\n        }\n    }\n}\n\nconst is_sat = await solver.check(); // sat\nconst model = solver.model() as Model\nvar buffer = \"\"\n\nfor (let i = 0; i < 9; i++) {\n    for (let j = 0; j < 9; j++) {\n        const v = model.eval(cells[i][j])\n        buffer += `${v}`\n    }\n    buffer += \"\\n\"\n}\nbuffer",result:{output:"715894632\n234516897\n689723145\n493657218\n867231954\n152489763\n376148529\n928365471\n541972386\n",error:"",status:"z3-ran",hash:"d7cf9ac1a35f6faf92422f74360e75b6186c67e0"},githubRepo:"Z3Prover/z3",editable:!1,readonly:!1,showLineNumbers:!0,langVersion:"4.11.0",tool:"z3-solver"},mdxType:"CustomCodeBlock"}),(0,r.kt)("p",null,"The encoding used in the following example uses arithmetic.\nIt works here, but is not the only possible encoding approach.\nYou can also use bit-vectors for the cells. It is generally better\nto use bit-vectors for finite domain problems in z3."),(0,r.kt)("h2",{id:"arithmetic-over-reals"},"Arithmetic over Reals"),(0,r.kt)("p",null,"You can create constants ranging over reals from strings that use fractions, decimal notation and from floating point numbers."),(0,r.kt)(i(),{input:{lang:"z3-js",highlight:"typescript",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:"const n1 = Z3.Real.val('1/2');\nconst n2 = Z3.Real.val('0.5');\nconst n3 = Z3.Real.val(0.5);\n\nconst conjecture = Z3.And(n1.eq(n2), n1.eq(n3));\nZ3.solve(Z3.Not(conjecture));",result:{output:"unsat",error:"",status:"z3-ran",hash:"f5634924f28fa1ad4d7e74239f31342571326ad9"},githubRepo:"Z3Prover/z3",editable:!1,readonly:!1,showLineNumbers:!0,langVersion:"4.11.0",tool:"z3-solver"},mdxType:"CustomCodeBlock"}),(0,r.kt)("p",null,"Z3 uses arbitrary precision arithmetic, so decimal positions are not truncated when you use strings to represent real numerals."),(0,r.kt)(i(),{input:{lang:"z3-js",highlight:"typescript",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:"const n4 = Z3.Real.val('-1/3');\nconst n5 = Z3.Real.val('-0.3333333333333333333333333333333333');\n\nZ3.solve(n4.eq(n5));",result:{output:"unsat",error:"",status:"z3-ran",hash:"bea2a13b92498a6c8bf3d5e4f010dba836c77bca"},githubRepo:"Z3Prover/z3",editable:!1,readonly:!1,showLineNumbers:!0,langVersion:"4.11.0",tool:"z3-solver"},mdxType:"CustomCodeBlock"}),(0,r.kt)("h2",{id:"non-linear-arithmetic"},"Non-linear arithmetic"),(0,r.kt)("p",null,"Z3 uses a decision procedure for non-linear arithmetic over reals.\nIt is based on Cylindric Algebraic Decomposition. Solutions to non-linear\narithmetic formulas are no longer necessarily rational. They are represented\nas ",(0,r.kt)("em",{parentName:"p"},"algebraic numbers")," in general and can be displayed with any number of\ndecimal position precision."),(0,r.kt)(i(),{input:{lang:"z3-js",highlight:"typescript",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:"setParam('pp.decimal', true);\nsetParam('pp.decimal_precision', 80);\n\nconst x = Z3.Real.const('x');\nconst y = Z3.Real.const('y');\nconst z = Z3.Real.const('z');\n\nconst solver = new Z3.Solver();\nsolver.add(x.mul(x).add(y.mul(y)).eq(1)); // x^2 + y^2 == 1\nsolver.add(x.mul(x).mul(x).add(z.mul(z).mul(z)).lt('1/2')); // x^3 + z^3 < 1/2\n\nawait solver.check(); // sat\nsolver.model()",result:{output:"(define-fun y () Real\n  (- 0.99215674164922147143810590761472265964134719365591881763812542220040080871135636?))\n(define-fun x () Real\n  0.125)\n(define-fun z () Real\n  0.0)",error:"",status:"z3-ran",hash:"7428cad340bb77f88ffec3084342d3e271f2028b"},githubRepo:"Z3Prover/z3",editable:!1,readonly:!1,showLineNumbers:!0,langVersion:"4.11.0",tool:"z3-solver"},mdxType:"CustomCodeBlock"}),(0,r.kt)("h2",{id:"bit-vectors"},"Bit-vectors"),(0,r.kt)("p",null,"Unlike in programming languages, there is no distinction between\nsigned and unsigned bit-vectors. Instead the API supports operations\nthat have different meaning depending on whether a bit-vector is treated\nas a signed or unsigned numeral. These are signed comparison and signed division, remainder operations."),(0,r.kt)("p",null,"In the following we illustrate the use of signed and unsigned less-than-or-equal."),(0,r.kt)(i(),{input:{lang:"z3-js",highlight:"typescript",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:"const x = Z3.BitVec.const('x', 32);\n\nconst sConj = x.sub(10).sle(0).eq(x.sle(10));\nconst sSolver = new Z3.Solver();\nsSolver.add(sConj);\nawait sSolver.check(); // sat\n\nconst sModel = sSolver.model();\n\n\nconst uConj = x.sub(10).ule(0).eq(x.ule(10));\nconst uSolver = new Z3.Solver();\nuSolver.add(uConj);\nawait uSolver.check(); // sat\n\nconst uModel = uSolver.model();\n[uModel.get(x), sModel.get(x)] // unsigned, signed",result:{output:"#x0000000a,#x0000000b",error:"",status:"z3-ran",hash:"fbde575cd64049580869499c7866da8e41ec3ec0"},githubRepo:"Z3Prover/z3",editable:!1,readonly:!1,showLineNumbers:!0,langVersion:"4.11.0",tool:"z3-solver"},mdxType:"CustomCodeBlock"}),(0,r.kt)("p",null,"It is easy to write formulas that mix bit-wise and arithmetic operations over bit-vectors."),(0,r.kt)(i(),{input:{lang:"z3-js",highlight:"typescript",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:"const x = Z3.BitVec.const('x', 32);\nconst y = Z3.BitVec.const('y', 32);\n\nconst solver = new Z3.Solver();\nconst conjecture = x.xor(y).sub(103).eq(x.mul(y));\nsolver.add(conjecture);\nconst is_sat = await solver.check(); // sat\n\nconst model = solver.model();\n\n// need the following cast for `asSignedValue` to work\nconst xSol = model.get(x) as BitVecNum;\nconst ySol = model.get(y) as BitVecNum;\n\n\nconst are_vals = Z3.isBitVecVal(xSol) && Z3.isBitVecVal(ySol); // true\n\nconst xv = xSol.asSignedValue();\nconst yv = ySol.asSignedValue();\n\n// this solutions wraps around so we need to check using modulo\nconst is_eq = (xv ^ yv) - 103n === (xv * yv) % 2n ** 32n; // true\n\n` is-sat: ${is_sat} solutions are values: ${are_vals} satisfy equality: ${is_eq}`",result:{output:" is-sat: sat solutions are values: true satisfy equality: true",error:"",status:"z3-ran",hash:"85086f34ecb1f9292f4bf5865442a853177126b8"},githubRepo:"Z3Prover/z3",editable:!1,readonly:!1,showLineNumbers:!0,langVersion:"4.11.0",tool:"z3-solver"},mdxType:"CustomCodeBlock"}),(0,r.kt)("h2",{id:"using-z3-objects-wrapped-in-javascript"},"Using Z3 objects wrapped in JavaScript"),(0,r.kt)("p",null,"The following example illustrates the use of AstVector"),(0,r.kt)(i(),{input:{lang:"z3-js",highlight:"typescript",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:"const solver = new Z3.Solver();\n\nconst vector = new Z3.AstVector<Arith>() as AstVector<string, Arith>;\nfor (let i = 0; i < 5; i++) {\n    vector.push(Z3.Int.const(`int__${i}`));\n}\n\nconst length = vector.length();\nfor (let i = 0; i < length; i++) {\n    solver.add((vector.get(i) as Arith).gt(1));\n}\nsolver.add(Z3.Distinct(...vector));\nawait solver.check();\nsolver.model()",result:{output:"(define-fun int__2 () Int\n  3)\n(define-fun int__3 () Int\n  4)\n(define-fun int__0 () Int\n  5)\n(define-fun int__1 () Int\n  2)\n(define-fun int__4 () Int\n  6)",error:"",status:"z3-ran",hash:"921e21e76ba577528a1e4c7467ebd7ebeabb6b23"},githubRepo:"Z3Prover/z3",editable:!1,readonly:!1,showLineNumbers:!0,langVersion:"4.11.0",tool:"z3-solver"},mdxType:"CustomCodeBlock"}))}m.isMDXComponent=!0}}]);