# Master and Bachelor thesis topics for Microsoft in Prague, Czech Republic

Latest update: 2025/2/27

Topics are primarily for MFF UK, although we have ongoing collaboration with FI MUNI, FIT CVUT and FIT VUT -- all universities (not limited by this list or to Czech Republic) are welcome to participate.

If you pick a topic, please ping me if the topic is not taken. Also please make sure your university agrees with it. If everyone is onboard, I will connect you with Microsoft expert in the area to support you through topic refinement and your work.

Ping me if you are not sure about a topic, or if you have ideas for other related topics we might be able to support.

<br/>
<br/>



## Bachelor thesis - topics

Create an **IL rewrite library** on top of `System.Reflection.Metadata`. The library should make it easy to create a tool which takes an assembly on the input, makes some modifications to it (for example add an attribute to some member, remove a member, or add some item) and writes it out as a new assembly. Focus of the project will be correctness, performance and ease of use (in that order). The library will be later used to port the existing ILStrip tool to it and then use it to improve trimming for mobile scenarios (by moving custom steps from a trimmer into this new tool).

***
<br/>

Implement some **.NET runtime analyzers and code fixers**. .NET runtime (Roslyn) analyzers inspect your C# or Visual Basic code for code quality and style issues. Code fixers offer you options to fix your code. List of analyzers and code fixers can be [found here](https://github.com/dotnet/runtime/issues?q=is%3Aissue+is%3Aopen+analyzers+label%3Acode-analyzer)

***
<br/>

Implement some **ASP.NET Core analyzers and code fixers**. .NET runtime (Roslyn) analyzers inspect your C# or Visual Basic code for code quality and style issues. Code fixers offer you options to fix your code. List of analyzers and code fixers can be [found here](https://github.com/dotnet/aspnetcore/issues?q=is%3Aissue%20state%3Aopen%20label%3Aanalyzer%20milestone%3ABacklog%20type%3AFeature)

***
<br/>

**F# Compiler - Support 'without' for anonymous records**
- *Abstract*: F# Anonymous records are types created on the fly based on assigned fields. Their existing versions already support the `with` keyword to create a new anonymous type from an existing, anonymous or properly named, record. This thesis would design and implement an addition of a symmetrical `without` keyword to improve the algebra of operations done with anonymous records.
- This is a suggestion to the F# language which is approved in principle already.
- More details: [Support `without` for Anonymous Records](https://github.com/fsharp/fslang-suggestions/issues/762)

<br/>
<br/>



## Master thesis - topics

Prototype **WebTransport** in .NET Core based on already existing HTTP/3 and QUIC implementations. WebTransport is new networking protocol based on HTTP/3 and QUIC protocols, currently in [draft stage](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3-02). It supports sending data both reliably and unreliably. It can be viewed as next generation of popular WebSockets protocol (which is based on HTTP 1.1 and HTTP/2 protocols).

***
<br/>

**⁠Port .NET trimming tool from Cecil API to System.Reflection.Metadata backend**. .NET trimming tool is in repo [dotnet/runtime](https://github.com/dotnet/runtime). The goal is to replace old-style Cecil APIs with .NET Core inbox `System.Reflection.Metadata`-based implementation. [Tracking issue](https://github.com/dotnet/linker/issues/1997).

***
<br/>

Create **mutation testing** for .NET project based on CLR Instrumentation Engine. Similar to [stryker-mutator/stryker-net](https://github.com/stryker-mutator/stryker-net) (Mutation testing for .NET core and .NET framework). The goal is to scale on large code bases (like Roslyn) by analyzing and reusing parts of Stryker, while migrating Stryker backend-logic to CLR Instrumentation Engine for collection of code coverage of each test and for performing the mutations

***
<br/>

Create **coverage-guided fuzzing** for .NET/C#. Fuzzing is used for discovering security bugs (crashes, memory leaks, hangs) in SW by randomly changing its input (binary or text). Coverage-guided fuzzing uses program instrumentation to generate "smarter" random inputs to discover security problems faster. Similar tools exist for other languages, e.g. [dvyukov/go-fuzz](https://github.com/dvyukov/go-fuzz)

***
<br/>

**F# Compiler - Type Providers - Generate types from other types**
- *Abstract*: F# Type providers are a meta-programming and code-generation tool which is used for working with external structured data, such as SQL tables, CSV, HTML and many others. As of now, it can also receive constant values as arguments (such as a database connection info, path to an Excel file, URL pointing to a swagger definition). This thesis would do the language design and compiler implementation to allow passing in other user-defined types as arguments, in order to code-generate their enriched versions. Example use cases would be to generate a mutable DTO type based on a domain-model F# data structure, use existing user-defined records for typed access to .csv files and others.
- This is a suggestion to the F# language which is approved in principle already.
- More details: [F# RFC FS-1023 - Allow type providers to generate types from types](https://github.com/fsharp/fslang-design/blob/main/RFCs/FS-1023-type-providers-generate-types-from-types.md)

***
<br/>

**F# Compiler + Language design - Support for anonymous type-tagged union types**
- *Abstract*: Discriminated unions are a powerful tool for. Currently, all cases of a union type in F# must have a unique name: `type GuiSize = Pixels of int | Percentage of float | Automatic`
- And they are differentiated by that name. The proposal is to allow anonymous unions types for disjoint sets of types, e.g. to be used as function arguments similar to many existing JavaScript functions:
`let newFunction (argument: int | float | () ) = ...`
- This thesis will analyze, design and implement support for anonymous type-tagged union types into the F# programming language.
- This is a suggestion to the F# language which is approved in principle already.
- Details: [Erased type-tagged anonymous union types](https://github.com/fsharp/fslang-suggestions/issues/538)

<br/>
<br/>



## Bachelor or Master thesis

**F# Tooling - Search engine for typed functions by using F# Compiler APIs (aka 'hoogle for F#')**
- *Abstract*: Existing IDEs offer many mechanism for searching code by name or parts of a name. When extending code in large codebases, a programmer might not have an idea how a function is called, but will know that it needs to meet a certain type signature, e.g. a function `int -> System.DateTime`. This thesis would design a suitable query syntax and implement the search using existing `FSharp.Compiler.Service.dll` APIs.
- More details: [More repl features (search for type, browse module, show docs, print function definition, etc.)](https://github.com/fsharp/fslang-suggestions/issues/599)

<br/>
<br/>



## Ideas for thesis

**Orleans projects** - see [full list](https://learn.microsoft.com/en-us/dotnet/orleans/resources/student-projects)

***
<br/>

Augment the regex source generator to support `RegexOptions.NonBacktracking`. This is not only about emitting source for `NonBacktracking`, but figuring out what additional APIs would need to be exposed for that generated source to function. This is a hard project.

***
<br/>

Build a LlamaIndex-like solution on top of `Microsoft.Extensions.VectorData` / `Microsoft.Extensions.AI`, in particular for handling advanced RAG patterns easily in .NET.

***
<br/>

Build a Visual Studio extension using OpenAI realtime API and .NET that lets you discuss your code with AI, with integrated tools so that the AI can automate changes back into the code, launch tools, etc.

***
<br/>

Add JSON Path or JSON Merge Patch support to `System.Text.Json`.

***
<br/>

Write an intercepting source generator for LINQ that replaces calls to LINQ methods with optimized implementations based on the exact sequence of calls, removing various overheads.

***
<br/>

Implement state-of-the-art stable sorting routines with the goal of benchmarking and picking one to use to replace `Array.Sort`’s implementation, assuming an implementation can be found that rivals the current unstable algorithm employed.

***
<br/>

`BigInteger` rewrite to address existing issues, keep performance in mind
