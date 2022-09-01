"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[344],{8911:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var r=n(3117),s=(n(7294),n(3905)),a=n(7634),i=n.n(a);const o={title:"Strings",sidebar_position:6},l=void 0,d={unversionedId:"theories/Strings",id:"theories/Strings",title:"Strings",description:"SMTLIB2 standard The theory of unicode strings",source:"@site/docs-smtlib/02 - theories/06 - Strings.md",sourceDirName:"02 - theories",slug:"/theories/Strings",permalink:"/z3guide/docs/theories/Strings",draft:!1,editUrl:"https://github.com/rlisahuang/z3guide/tree/main/website/docs-smtlib/02 - theories/06 - Strings.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Strings",sidebar_position:6},sidebar:"smtlibSidebar",previous:{title:"Datatypes",permalink:"/z3guide/docs/theories/Datatypes"},next:{title:"Sequences",permalink:"/z3guide/docs/theories/Sequences"}},u={},c=[{value:"Introduction",id:"introduction",level:2},{value:"String Constraints by Example",id:"string-constraints-by-example",level:2},{value:"Creating Strings",id:"creating-strings",level:2},{value:"Built-in types and constants",id:"built-in-types-and-constants",level:3},{value:"String literals",id:"string-literals",level:3},{value:"String Operations by example",id:"string-operations-by-example",level:2},{value:"<code>(str.++ a b c)</code> - String concatenation",id:"str-a-b-c---string-concatenation",level:3},{value:"<code>(str.len s)</code> - the length of string <code>s</code>",id:"strlen-s---the-length-of-string-s",level:3},{value:"<code>(str.at s offset)</code> - character substring at offset",id:"strat-s-offset---character-substring-at-offset",level:3},{value:"<code>(str.indexof s sub [offset])</code> - first position of substring",id:"strindexof-s-sub-offset---first-position-of-substring",level:3},{value:"<code>(str.substr s offset length)</code> - substring at a given offset",id:"strsubstr-s-offset-length---substring-at-a-given-offset",level:3},{value:"<code>(str.contains a b)</code> - string containment",id:"strcontains-a-b---string-containment",level:3},{value:"<code>(str.prefixof a b)</code> <code>(str.suffixof a b)</code> - prefix and suffix checks",id:"strprefixof-a-b-strsuffixof-a-b---prefix-and-suffix-checks",level:3},{value:"<code>(str.from_int i)</code> <code>(str.to_int s)</code> - convert to and from non-negative integers",id:"strfrom_int-i-strto_int-s---convert-to-and-from-non-negative-integers",level:3},{value:"<code>(str.&lt; s t)</code> <code>(str.&lt;= s t)</code> - lexicographic string comparison",id:"str-s-t-str-s-t---lexicographic-string-comparison",level:3},{value:"<code>(str.is_digit s)</code> - test if string represents a digit",id:"stris_digit-s---test-if-string-represents-a-digit",level:3},{value:"<code>(str.to_code s)</code> <code>(str.from_code i)</code> - character codes",id:"strto_code-s-strfrom_code-i---character-codes",level:3},{value:"<code>(_ char n)</code> - string from a character code",id:"_-char-n---string-from-a-character-code",level:3},{value:"Summary of Operations",id:"summary-of-operations",level:2}],p={toc:c};function m(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"SMTLIB2 standard")," ",(0,s.kt)("a",{parentName:"p",href:"http://smtlib.cs.uiowa.edu/theories-UnicodeStrings.shtml"},"The theory of unicode strings"))),(0,s.kt)("h2",{id:"introduction"},"Introduction"),(0,s.kt)("p",null,"This section describes Z3's handling of strings.\nStrings are represented as a sequence of Characters where the default character sort is Unicode.\nYou can reason about regular expressions of sequences.\nSequences over elements other than Unicode characters and regular expressions are described in separate sections.\nZ3 offers built-in support for\nusing string constants and dedicated solvers for checking\nsatisfiability over constraints using strings and sequences.\nNote that the (current) specialized solver is able to establish\nsatisfiability for a non-trivial class of formulas, but is far from\na decision procedure even for fragments of string equalities that can be decided:\nZ3 only solves string equalities using an incomplete\nheuristic solver\nand the full combination of lengths and sequences\n(and regular expressions) is not decidable anyway.\nIn Z3, strings are a special case of sequences, and for the case of Unicode strings,\nand regular expressions over Unicode strings seeks to implement the ",(0,s.kt)("a",{parentName:"p",href:"http://smtlib.cs.uiowa.edu/theories-UnicodeStrings.shtml"},"SMTLIB2 standard"),"."),(0,s.kt)("p",null,"You can configure z3 to use one of two backends for solving strings.\nThe default backend is called the ",(0,s.kt)("inlineCode",{parentName:"p"},"seq")," solver. It solves constraints over both sequences and strings.\nThe other backend is ",(0,s.kt)("a",{parentName:"p",href:"https://z3string.github.io/"},"z3str3"),", which applies to strings and regular expressions over strings.\nExtensions to sequences operations are not supported in z3str3."),(0,s.kt)(i(),{input:{lang:"z3",highlight:"clojure",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:"(set-option :smt.string_solver z3str3) ; set the string solver to be the z3str3 solver\n(set-option :smt.string_solver seq)    ; set the string solver to be the seq solver (default)",result:{output:"",error:"",status:"z3-ran",hash:"5ce3d026ecc2fea62d63126d8b1aa6f611ac26c7"},githubRepo:"Z3Prover/z3",editable:!1,readonly:!1,showLineNumbers:!0,langVersion:"4.11.0",tool:"z3-solver"},mdxType:"CustomCodeBlock"}),(0,s.kt)("h2",{id:"string-constraints-by-example"},"String Constraints by Example"),(0,s.kt)("p",null,"Strings ",(0,s.kt)("inlineCode",{parentName:"p"},"a, b, c")," can have a non-trivial overlap."),(0,s.kt)(i(),{input:{lang:"z3",highlight:"clojure",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:'(declare-const a String)\n(declare-const b String)\n(declare-const c String)\n(assert (= (str.++ a b) "abcd"))\n(assert (= (str.++ b c) "cdef"))\n(assert (not (= b "")))\n(check-sat)',result:{output:"sat\n",error:"",status:"z3-ran",hash:"75631886620de101dc722123695fee45d7916ff0"},githubRepo:"Z3Prover/z3",editable:!1,readonly:!1,showLineNumbers:!0,langVersion:"4.11.0",tool:"z3-solver"},mdxType:"CustomCodeBlock"}),(0,s.kt)("p",null,"There is a solution to ",(0,s.kt)("inlineCode",{parentName:"p"},"a"),' that is not a sequence of "a"\'s.'),(0,s.kt)(i(),{input:{lang:"z3",highlight:"clojure",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:'(declare-const a String)\n(declare-const b String)\n(declare-const c String)\n(assert (= (str.++ a "ab" b) (str.++ b "ba" c)))\n(assert (= c (str.++ a b)))\n(assert (not (= (str.++ a "a") (str.++ "a" a))))\n(check-sat)\n(get-model)',result:{output:'sat\n(\n  (define-fun b () String\n    "")\n  (define-fun a () String\n    "b")\n  (define-fun c () String\n    "b")\n)\n',error:"",status:"z3-ran",hash:"7b93dc0123f25c0d779c3aed36a0df665a60f0a0"},githubRepo:"Z3Prover/z3",editable:!1,readonly:!1,showLineNumbers:!0,langVersion:"4.11.0",tool:"z3-solver"},mdxType:"CustomCodeBlock"}),(0,s.kt)("h2",{id:"creating-strings"},"Creating Strings"),(0,s.kt)("h3",{id:"built-in-types-and-constants"},"Built-in types and constants"),(0,s.kt)("p",null,"The name ",(0,s.kt)("inlineCode",{parentName:"p"},"String")," is a built-in name for the String sort.\nString literals can furthermore be entered directly as literals\ndelimited by quotes. The following example asks whether there are\nstrings ",(0,s.kt)("inlineCode",{parentName:"p"},"a")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"b")," that concatenate to ",(0,s.kt)("inlineCode",{parentName:"p"},'"abc"'),"\nfollowed by ",(0,s.kt)("inlineCode",{parentName:"p"},"b"),"."),(0,s.kt)(i(),{input:{lang:"z3",highlight:"clojure",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:'(declare-const a String)\n(declare-const b String)\n(assert (= (str.++ b a) (str.++ "abc" b)))\n(check-sat)\n(get-model)',result:{output:'sat\n(\n  (define-fun b () String\n    "")\n  (define-fun a () String\n    "abc")\n)\n',error:"",status:"z3-ran",hash:"da31b1b2f721fb2d7f3b557d346e8b4d941c6652"},githubRepo:"Z3Prover/z3",editable:!1,readonly:!1,showLineNumbers:!0,langVersion:"4.11.0",tool:"z3-solver"},mdxType:"CustomCodeBlock"}),(0,s.kt)("h3",{id:"string-literals"},"String literals"),(0,s.kt)("p",null,"To represent non-ASCII characters the SMTLIB2 standard uses unicode escape sequences.\nThe escape sequences are of the form ",(0,s.kt)("inlineCode",{parentName:"p"},"\\u{d\u2080}"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"\\u{d\u2081d\u2080}"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"\\u{d\u2082d\u2081d\u2080}"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"\\u{d\u2083d\u2082d\u2081d\u2080}"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"\\u{d\u2084d\u2083d\u2082d\u2081d\u2080}"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"\\ud\u2083d\u2082d\u2081d\u2080"),"\nwhere ",(0,s.kt)("inlineCode",{parentName:"p"},"d")," is a hexadecimal digit. Other\ncharacters are treated as part of the string. For example, a newline within a string\nis treated as a new-line character. "),(0,s.kt)("p",null,"The following example shows\nthree ways to enter the newline character."),(0,s.kt)(i(),{input:{lang:"z3",highlight:"clojure",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:'(define-const a String "\\u{a}")\n(define-const b String "\n")\n(define-const c String "\\n")   ; this is not a newline character but \\ followed by n\n(simplify (= a b))\n(simplify (= a c))\n(simplify (str.++ a b c))',result:{output:'true\nfalse\n"\\u{a}\\u{a}\\n"\n',error:"",status:"z3-ran",hash:"62d2cf6ff46ea1a17aa90d399e5d58cf5a157118"},githubRepo:"Z3Prover/z3",editable:!1,readonly:!1,showLineNumbers:!0,langVersion:"4.11.0",tool:"z3-solver"},mdxType:"CustomCodeBlock"}),(0,s.kt)("h2",{id:"string-operations-by-example"},"String Operations by example"),(0,s.kt)("h3",{id:"str-a-b-c---string-concatenation"},(0,s.kt)("inlineCode",{parentName:"h3"},"(str.++ a b c)")," - String concatenation"),(0,s.kt)("p",null,"A string cannot overlap with two different characters."),(0,s.kt)(i(),{input:{lang:"z3",highlight:"clojure",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:'(declare-const a String)\n(assert (= (str.++ a "b") (str.++ "a" a)))\n(check-sat)',result:{output:"unsat\n",error:"",status:"z3-ran",hash:"a94b6e44fa75989506f21f410eed800412c136f0"},githubRepo:"Z3Prover/z3",editable:!1,readonly:!1,showLineNumbers:!0,langVersion:"4.11.0",tool:"z3-solver"},mdxType:"CustomCodeBlock"}),(0,s.kt)("h3",{id:"strlen-s---the-length-of-string-s"},(0,s.kt)("inlineCode",{parentName:"h3"},"(str.len s)")," - the length of string ",(0,s.kt)("inlineCode",{parentName:"h3"},"s")),(0,s.kt)("p",null,"There is a solution to ",(0,s.kt)("inlineCode",{parentName:"p"},"a")," of length at most 2."),(0,s.kt)(i(),{input:{lang:"z3",highlight:"clojure",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:'(declare-const a String)\n(declare-const b String)\n(assert (= (str.++ "abc" a) (str.++ b "cef")))\n(assert (<= (str.len a) 2))\n(check-sat)',result:{output:"sat\n",error:"",status:"z3-ran",hash:"416ea254441750a740e2fd678086f6c2b240fc66"},githubRepo:"Z3Prover/z3",editable:!1,readonly:!1,showLineNumbers:!0,langVersion:"4.11.0",tool:"z3-solver"},mdxType:"CustomCodeBlock"}),(0,s.kt)("h3",{id:"strat-s-offset---character-substring-at-offset"},(0,s.kt)("inlineCode",{parentName:"h3"},"(str.at s offset)")," - character substring at offset"),(0,s.kt)("p",null,"The substring is of length 1 if ",(0,s.kt)("inlineCode",{parentName:"p"},"offset")," is within the bounds of ",(0,s.kt)("inlineCode",{parentName:"p"},"s"),", otherwise the result is the empty string."),(0,s.kt)(i(),{input:{lang:"z3",highlight:"clojure",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:'(simplify (str.++ (str.at "abc" 1) (str.at "abc" 0)))\n(simplify (str.at "abcd" 4))',result:{output:'"ba"\n""\n',error:"",status:"z3-ran",hash:"d8d391e5f8fc4b216d078889780e1614d8b31758"},githubRepo:"Z3Prover/z3",editable:!1,readonly:!1,showLineNumbers:!0,langVersion:"4.11.0",tool:"z3-solver"},mdxType:"CustomCodeBlock"}),(0,s.kt)("p",null,"Note that ",(0,s.kt)("inlineCode",{parentName:"p"},"str.at")," does not result in a character but a string of length one.\nYou can use ",(0,s.kt)("inlineCode",{parentName:"p"},'(seq.nth "abc" 1)')," to access the character at offset 1.\nThe function ",(0,s.kt)("inlineCode",{parentName:"p"},"seq.nth")," is not part of the SMTLIB2 format for strings. "),(0,s.kt)("h3",{id:"strindexof-s-sub-offset---first-position-of-substring"},(0,s.kt)("inlineCode",{parentName:"h3"},"(str.indexof s sub [offset])")," - first position of substring"),(0,s.kt)("p",null,"The result is the first position of ",(0,s.kt)("inlineCode",{parentName:"p"},"sub")," in ",(0,s.kt)("inlineCode",{parentName:"p"},"s"),", -1 if there are no occurrence.\nThe offset argument is optional. No offset corresponds to the offset 0."),(0,s.kt)(i(),{input:{lang:"z3",highlight:"clojure",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:'(simplify (str.indexof "abcabc" "a"))\n(simplify (str.indexof "abcabc" "a" 1))\n(simplify (str.indexof "abcabc" "a" 4))',result:{output:"0\n3\n(- 1)\n",error:"",status:"z3-ran",hash:"4ce1c8e01cbf7e96de3df57e73f4a77d54d57e82"},githubRepo:"Z3Prover/z3",editable:!1,readonly:!1,showLineNumbers:!0,langVersion:"4.11.0",tool:"z3-solver"},mdxType:"CustomCodeBlock"}),(0,s.kt)("h3",{id:"strsubstr-s-offset-length---substring-at-a-given-offset"},(0,s.kt)("inlineCode",{parentName:"h3"},"(str.substr s offset length)")," - substring at a given offset"),(0,s.kt)(i(),{input:{lang:"z3",highlight:"clojure",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:'(simplify (str.substr "xxabcyy" 2 3))\n(simplify (str.substr "xxabcyy" 2 10))  ; there are only 5 characters left to return\n(simplify (str.substr "xxabcyy" 10 2))  ; offset is out of bounds, so return the empty string',result:{output:'"abc"\n"abcyy"\n""\n',error:"",status:"z3-ran",hash:"236a71394e5f1c44ba86206f2190bf624ffee672"},githubRepo:"Z3Prover/z3",editable:!1,readonly:!1,showLineNumbers:!0,langVersion:"4.11.0",tool:"z3-solver"},mdxType:"CustomCodeBlock"}),(0,s.kt)("h3",{id:"strcontains-a-b---string-containment"},(0,s.kt)("inlineCode",{parentName:"h3"},"(str.contains a b)")," - string containment"),(0,s.kt)("p",null,"Contains is transitive."),(0,s.kt)(i(),{input:{lang:"z3",highlight:"clojure",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:"(declare-const a String)\n(declare-const b String)\n(declare-const c String)\n(assert (str.contains a b))\n(assert (str.contains b c))\n(assert (not (str.contains a c)))\n(check-sat)",result:{output:"unsat\n",error:"",status:"z3-ran",hash:"eca1a6abeda4f8814d0b1d3f9cfdb857da10db61"},githubRepo:"Z3Prover/z3",editable:!1,readonly:!1,showLineNumbers:!0,langVersion:"4.11.0",tool:"z3-solver"},mdxType:"CustomCodeBlock"}),(0,s.kt)("p",null,"But containment is not a linear order."),(0,s.kt)(i(),{input:{lang:"z3",highlight:"clojure",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:"(declare-const a String)\n(declare-const b String)\n(declare-const c String)\n(assert (str.contains a b))\n(assert (str.contains a c))\n(assert (not (str.contains b c)))\n(assert (not (str.contains c b)))\n(check-sat)\n(get-model)",result:{output:'sat\n(\n  (define-fun b () String\n    "A")\n  (define-fun a () String\n    "BCA")\n  (define-fun c () String\n    "B")\n)\n',error:"",status:"z3-ran",hash:"f298a09c185adb1093d0fb994f0305fc39174d12"},githubRepo:"Z3Prover/z3",editable:!1,readonly:!1,showLineNumbers:!0,langVersion:"4.11.0",tool:"z3-solver"},mdxType:"CustomCodeBlock"}),(0,s.kt)("h3",{id:"strprefixof-a-b-strsuffixof-a-b---prefix-and-suffix-checks"},(0,s.kt)("inlineCode",{parentName:"h3"},"(str.prefixof a b)")," ",(0,s.kt)("inlineCode",{parentName:"h3"},"(str.suffixof a b)")," - prefix and suffix checks"),(0,s.kt)("p",null,"Every string is equal to the prefix and suffix that add up to a its length."),(0,s.kt)(i(),{input:{lang:"z3",highlight:"clojure",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:"(declare-const a String)\n(declare-const b String)\n(declare-const c String)\n(assert (str.prefixof b a))\n(assert (str.suffixof c a))\n(assert (= (str.len a) (+ (str.len b) (str.len c))))\n(assert (not (= a (str.++ b c))))\n(check-sat)",result:{output:"unsat\n",error:"",status:"z3-ran",hash:"06b6437c1148d0997cad2c6750dcb6727060cf98"},githubRepo:"Z3Prover/z3",editable:!1,readonly:!1,showLineNumbers:!0,langVersion:"4.11.0",tool:"z3-solver"},mdxType:"CustomCodeBlock"}),(0,s.kt)("h3",{id:"strfrom_int-i-strto_int-s---convert-to-and-from-non-negative-integers"},(0,s.kt)("inlineCode",{parentName:"h3"},"(str.from_int i)")," ",(0,s.kt)("inlineCode",{parentName:"h3"},"(str.to_int s)")," - convert to and from non-negative integers"),(0,s.kt)(i(),{input:{lang:"z3",highlight:"clojure",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:'(simplify (str.from_int 10))\n(simplify (str.from_int -1))  ; results in the empty string because -1 is not non-negative\n(simplify (str.to_int "10"))\n(simplify (str.to_int "010")) ; leading 0s are ignored\n(simplify (str.to_int "000"))\n(simplify (str.to_int "-10")) ; results in -1 because -10 is not non-negative',result:{output:'"10"\n""\n10\n10\n0\n(- 1)\n',error:"",status:"z3-ran",hash:"ad0f2c2d0a1d90ff79272985d9fbce627a4913f0"},githubRepo:"Z3Prover/z3",editable:!1,readonly:!1,showLineNumbers:!0,langVersion:"4.11.0",tool:"z3-solver"},mdxType:"CustomCodeBlock"}),(0,s.kt)("h3",{id:"str-s-t-str-s-t---lexicographic-string-comparison"},(0,s.kt)("inlineCode",{parentName:"h3"},"(str.< s t)")," ",(0,s.kt)("inlineCode",{parentName:"h3"},"(str.<= s t)")," - lexicographic string comparison"),(0,s.kt)(i(),{input:{lang:"z3",highlight:"clojure",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:'(simplify (str.< "alex" "andra"))\n(simplify (str.<= "nate" "anthony"))',result:{output:"true\nfalse\n",error:"",status:"z3-ran",hash:"af94f4f7e5bec8606a04dd969ec0cd276d0609ef"},githubRepo:"Z3Prover/z3",editable:!1,readonly:!1,showLineNumbers:!0,langVersion:"4.11.0",tool:"z3-solver"},mdxType:"CustomCodeBlock"}),(0,s.kt)("h3",{id:"stris_digit-s---test-if-string-represents-a-digit"},(0,s.kt)("inlineCode",{parentName:"h3"},"(str.is_digit s)")," - test if string represents a digit"),(0,s.kt)(i(),{input:{lang:"z3",highlight:"clojure",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:'(simplify (str.is_digit "1"))   ; true\n(simplify (str.is_digit "10"))  ; false - it is not a single character\n(simplify (str.is_digit "a"))   ; false - there aren\'t even any digits',result:{output:"true\nfalse\nfalse\n",error:"",status:"z3-ran",hash:"a4b6e9b1a5b6e9fc841b3be21908f1dacd213111"},githubRepo:"Z3Prover/z3",editable:!1,readonly:!1,showLineNumbers:!0,langVersion:"4.11.0",tool:"z3-solver"},mdxType:"CustomCodeBlock"}),(0,s.kt)("h3",{id:"strto_code-s-strfrom_code-i---character-codes"},(0,s.kt)("inlineCode",{parentName:"h3"},"(str.to_code s)")," ",(0,s.kt)("inlineCode",{parentName:"h3"},"(str.from_code i)")," - character codes"),(0,s.kt)(i(),{input:{lang:"z3",highlight:"clojure",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:'(simplify (str.to_code "a"))\n(simplify (str.from_code 1214))',result:{output:'97\n"\\u{4be}"\n',error:"",status:"z3-ran",hash:"9556e4d3e6f3e6b63045b39d0d09e63d60345382"},githubRepo:"Z3Prover/z3",editable:!1,readonly:!1,showLineNumbers:!0,langVersion:"4.11.0",tool:"z3-solver"},mdxType:"CustomCodeBlock"}),(0,s.kt)("h3",{id:"_-char-n---string-from-a-character-code"},(0,s.kt)("inlineCode",{parentName:"h3"},"(_ char n)")," - string from a character code"),(0,s.kt)(i(),{input:{lang:"z3",highlight:"clojure",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:"(simplify (_ char 1000))\n(simplify (_ char 100000000)) ; out of bounds",result:{output:'"\\u{3e8}"\n(error "line 2 column 28: character literal is out of bounds")\n',error:'"\\u{3e8}"\n(error "line 2 column 28: character literal is out of bounds")\n',status:"z3-runtime-error",hash:"594699dfbb17b5d04d3470d0a6362b9fd0be4023"},githubRepo:"Z3Prover/z3",editable:!1,readonly:!1,showLineNumbers:!0,langVersion:"4.11.0",tool:"z3-solver"},mdxType:"CustomCodeBlock"}),(0,s.kt)("p",null,"Note that after ",(0,s.kt)("inlineCode",{parentName:"p"},"(_ char 54)")," is the same as ",(0,s.kt)("inlineCode",{parentName:"p"},"(simplify (str.from_code 54))"),"."),(0,s.kt)("h2",{id:"summary-of-operations"},"Summary of Operations"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Operation"),(0,s.kt)("th",{parentName:"tr",align:null},"Brief description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"(str.++ a b c)")),(0,s.kt)("td",{parentName:"tr",align:null},"String concatenation of one or more strings")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"(str.len s)")),(0,s.kt)("td",{parentName:"tr",align:null},"String length. Returns an integer")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"(str.substr s offset length)")),(0,s.kt)("td",{parentName:"tr",align:null},"Retrieves substring of ",(0,s.kt)("inlineCode",{parentName:"td"},"s")," at ",(0,s.kt)("inlineCode",{parentName:"td"},"offset"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"(str.indexof s sub)")),(0,s.kt)("td",{parentName:"tr",align:null},"Retrieves first position of ",(0,s.kt)("inlineCode",{parentName:"td"},"sub")," in ",(0,s.kt)("inlineCode",{parentName:"td"},"s"),", -1 if there are no occurrences")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"(str.indexof s sub offset)")),(0,s.kt)("td",{parentName:"tr",align:null},"Retrieves first position of ",(0,s.kt)("inlineCode",{parentName:"td"},"sub")," at or after ",(0,s.kt)("inlineCode",{parentName:"td"},"offset")," in ",(0,s.kt)("inlineCode",{parentName:"td"},"s"),", -1 if there are no occurrences")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"(str.at s offset)")),(0,s.kt)("td",{parentName:"tr",align:null},"Substring of length 1 at ",(0,s.kt)("inlineCode",{parentName:"td"},"offset")," in ",(0,s.kt)("inlineCode",{parentName:"td"},"s"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"(str.contains s sub)")),(0,s.kt)("td",{parentName:"tr",align:null},"Does ",(0,s.kt)("inlineCode",{parentName:"td"},"s")," contain the substring ",(0,s.kt)("inlineCode",{parentName:"td"},"sub"),"?")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"(str.prefixof pre s)")),(0,s.kt)("td",{parentName:"tr",align:null},"Is ",(0,s.kt)("inlineCode",{parentName:"td"},"pre")," a prefix of ",(0,s.kt)("inlineCode",{parentName:"td"},"s"),"?")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"(str.suffixof suf s)")),(0,s.kt)("td",{parentName:"tr",align:null},"Is ",(0,s.kt)("inlineCode",{parentName:"td"},"suf")," a suffix of ",(0,s.kt)("inlineCode",{parentName:"td"},"s"),"?")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"(str.replace s src dst)")),(0,s.kt)("td",{parentName:"tr",align:null},"Replace the first occurrence of ",(0,s.kt)("inlineCode",{parentName:"td"},"src")," by ",(0,s.kt)("inlineCode",{parentName:"td"},"dst")," in ",(0,s.kt)("inlineCode",{parentName:"td"},"s"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"(str.to_int s)")),(0,s.kt)("td",{parentName:"tr",align:null},"Retrieve integer encoded by string ",(0,s.kt)("inlineCode",{parentName:"td"},"s"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"(str.from_int i)")),(0,s.kt)("td",{parentName:"tr",align:null},"Retrieve string encoding of integer ",(0,s.kt)("inlineCode",{parentName:"td"},"i"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"(str.< s1 s2)")),(0,s.kt)("td",{parentName:"tr",align:null},"Lexicographic string less than")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"(str.<= s1 s2)")),(0,s.kt)("td",{parentName:"tr",align:null},"Lexicographic string less or equal to")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"(_ char ch)")),(0,s.kt)("td",{parentName:"tr",align:null},"Unit string from unicode character code")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"(str.is_digit s)")),(0,s.kt)("td",{parentName:"tr",align:null},"A predicate whether string is a one of the digits 0 to 9")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"(str.to_code s)")),(0,s.kt)("td",{parentName:"tr",align:null},"Convert string of length one to the character code (an integer). Produce -1 if the string is not of length 1")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"(str.from_code i)")),(0,s.kt)("td",{parentName:"tr",align:null},"Convert an integer in the range of valid Unicode to a string of length one")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"(str.replace_all s src dst)")),(0,s.kt)("td",{parentName:"tr",align:null},"Currently not supported: replace all occurrences of ",(0,s.kt)("inlineCode",{parentName:"td"},"s")," in ",(0,s.kt)("inlineCode",{parentName:"td"},"src")," by ",(0,s.kt)("inlineCode",{parentName:"td"},"dst"))))),(0,s.kt)("p",null,"Note that ",(0,s.kt)("inlineCode",{parentName:"p"},"(str.indexof s offset)")," is shorthand for ",(0,s.kt)("inlineCode",{parentName:"p"},"(str.indexof s offset 0)"),".\nAlso, note that  ",(0,s.kt)("inlineCode",{parentName:"p"},"(str.at s i)")," is the empty string or sequence for indices that are either negative or beyond\n",(0,s.kt)("inlineCode",{parentName:"p"},"(- (str.len s) 1)"),". Furthermore ",(0,s.kt)("inlineCode",{parentName:"p"},"(str.substr s offset length)")," is empty\nwhen the offset is outside the range of positions in ",(0,s.kt)("inlineCode",{parentName:"p"},"s")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"length")," is negative or\n",(0,s.kt)("inlineCode",{parentName:"p"},"offset+length")," exceeds the length of ",(0,s.kt)("inlineCode",{parentName:"p"},"s"),"."))}m.isMDXComponent=!0}}]);