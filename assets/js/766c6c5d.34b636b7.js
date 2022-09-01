"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1202],{439:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var s=t(3117),r=(t(7294),t(3905)),a=t(7634),o=t.n(a);const i={title:"Uninterpreted Functions and Constants",sidebar_position:4},l=void 0,u={unversionedId:"logic/Uninterpreted-functions-and-constants",id:"logic/Uninterpreted-functions-and-constants",title:"Uninterpreted Functions and Constants",description:"The basic building blocks of SMT formulas are constants and functions. Constants are just functions that take no arguments. So everything is really just a function.",source:"@site/docs-smtlib/01 - logic/04 - Uninterpreted-functions-and-constants.md",sourceDirName:"01 - logic",slug:"/logic/Uninterpreted-functions-and-constants",permalink:"/z3guide/docs/logic/Uninterpreted-functions-and-constants",draft:!1,editUrl:"https://github.com/rlisahuang/z3guide/tree/main/website/docs-smtlib/01 - logic/04 - Uninterpreted-functions-and-constants.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Uninterpreted Functions and Constants",sidebar_position:4},sidebar:"smtlibSidebar",previous:{title:"Propositional Logic",permalink:"/z3guide/docs/logic/propositional-logic"},next:{title:"Quantifiers",permalink:"/z3guide/docs/logic/Quantifiers"}},c={},d=[],f={toc:d};function h(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,s.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The basic building blocks of SMT formulas are constants and functions. Constants are just functions that take no arguments. So everything is really just a function."),(0,r.kt)(o(),{input:{lang:"z3",highlight:"clojure",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:"(declare-fun f (Int) Int)\n(declare-fun a () Int) ; a is a constant\n(declare-const b Int) ; syntax sugar for (declare-fun b () Int)\n(assert (< a 20))\n(assert (< b a))\n(assert (= (f 10) 1))\n(check-sat)\n(get-model)",result:{output:"sat\n(\n  (define-fun b () Int\n    18)\n  (define-fun a () Int\n    19)\n  (define-fun f ((x!0 Int)) Int\n    1)\n)\n",error:"",status:"z3-ran",hash:"de9aee63d9a1f110d0ec63603f165d6947cc100d"},githubRepo:"Z3Prover/z3",editable:!1,readonly:!1,showLineNumbers:!0,langVersion:"4.11.0",tool:"z3-solver"},mdxType:"CustomCodeBlock"}),(0,r.kt)("p",null,"Unlike programming languages, where functions have side-effects, can throw exceptions, or never return, functions in classical first-order logic have no side-effects and are total. That is, they are defined on all input values. This includes functions, such as division."),(0,r.kt)("p",null,"Function and constant symbols in pure first-order logic are ",(0,r.kt)("em",{parentName:"p"},"uninterpreted")," or ",(0,r.kt)("em",{parentName:"p"},"free"),", which means that no a priori interpretation is attached. This is in contrast to functions belonging to the signature of theories, such as arithmetic where the function + has a fixed standard interpretation (it adds two numbers). Uninterpreted functions and constants are maximally flexible; they allow any interpretation that is consistent with the constraints over the function or constant."),(0,r.kt)("p",null,"To illustrate uninterpreted functions and constants let us introduce an (uninterpreted) sort A, and the constants x, y ranging over A. Finally let f be an uninterpreted function that takes one argument of sort A and results in a value of sort A. The example illustrates how one can force an interpretation where f applied twice to x results in x again, but f applied once to x is different form x."),(0,r.kt)(o(),{input:{lang:"z3",highlight:"clojure",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:"(declare-sort A)\n(declare-const x A)\n(declare-const y A)\n(declare-fun f (A) A)\n(assert (= (f (f x)) x))\n(assert (= (f x) y))\n(assert (not (= x y)))\n(check-sat)\n(get-model)",result:{output:"sat\n(\n  ;; universe for A:\n  ;;   A!val!1 A!val!0 \n  ;; -----------\n  ;; definitions for universe elements:\n  (declare-fun A!val!1 () A)\n  (declare-fun A!val!0 () A)\n  ;; cardinality constraint:\n  (forall ((x A)) (or (= x A!val!1) (= x A!val!0)))\n  ;; -----------\n  (define-fun x () A\n    A!val!0)\n  (define-fun y () A\n    A!val!1)\n  (define-fun f ((x!0 A)) A\n    (ite (= x!0 A!val!1) A!val!0\n      A!val!1))\n)\n",error:"",status:"z3-ran",hash:"7e8eedc797301116e324204a7f8cc98f701c5f68"},githubRepo:"Z3Prover/z3",editable:!1,readonly:!1,showLineNumbers:!0,langVersion:"4.11.0",tool:"z3-solver"},mdxType:"CustomCodeBlock"}),(0,r.kt)("p",null,"The resulting model introduces abstract values for the elements in A, because the sort A is uninterpreted.\nThe interpretation for f in the model toggles between the two values for x and y, which are different."),(0,r.kt)("p",null,"The solver in z3 uses congruence closure to reason about equalities.\nCongruence closure allows inferring new equalities when the arguments to two applications\nof the same function are equal. In the example below, congruence closure infers that\n",(0,r.kt)("inlineCode",{parentName:"p"},"x")," equals ",(0,r.kt)("inlineCode",{parentName:"p"},"(f x)")," based on the first two assertions.\nSo the constraints become unsatisfiable when adding the disequality between\nthese two terms."),(0,r.kt)(o(),{input:{lang:"z3",highlight:"clojure",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:"(declare-sort A)\n(declare-fun f (A) A)\n(declare-const x A)\n(assert (= (f (f x)) x))\n(assert (= (f (f (f x))) x))\n(check-sat)\n(get-model)\n  \n(assert (not (= (f x) x)))\n(check-sat)",result:{output:"sat\n(\n  ;; universe for A:\n  ;;   A!val!0 \n  ;; -----------\n  ;; definitions for universe elements:\n  (declare-fun A!val!0 () A)\n  ;; cardinality constraint:\n  (forall ((x A)) (= x A!val!0))\n  ;; -----------\n  (define-fun x () A\n    A!val!0)\n  (define-fun f ((x!0 A)) A\n    A!val!0)\n)\nunsat\n",error:"",status:"z3-ran",hash:"2d9729645364f6ccca14eaea5da00e633dab5b52"},githubRepo:"Z3Prover/z3",editable:!1,readonly:!1,showLineNumbers:!0,langVersion:"4.11.0",tool:"z3-solver"},mdxType:"CustomCodeBlock"}))}h.isMDXComponent=!0}}]);