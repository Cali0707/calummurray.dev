import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between md:p-24 p-12">
      <h1 className="relative flex place-items-center text-5xl font-sans font-bold">
        Calum Murray
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-40 mt-12">
        <div className="relative flex items-center lg:col-start-2 justify-center top-20 lg:top-0">
          <Image
            src={"/calum.webp"}
            alt={"Calum's profile photo"}
            width={300}
            height={300}
            className="rounded-[36px]"
          />
        </div>
        <div className="lg:col-start-1 lg:row-start-1">
          <h3 className="text-3xl font-sans font-semibold">
            Hi, I&apos;m Calum Murray
          </h3>
          <br />
          <p>
            I am an engineer, researcher, and open source maintainer specializing in Applied AI, Agentic Systems, and Distributed Systems.
            My recent work focuses on the Model Context Protocol (MCP), where I am building tools to help LLMs interact with infrastructure
	    and existing system, as well as to help understand how LLMs interact with tools and resources. I started&nbsp;
	    <a
	      href={"https://github.com/genmcp/gen-mcp"}
              className={
                "font-semibold transition-colors text-cyan-900 hover:text-cyan-600 dark:text-cyan-400 hover:dark:text-cyan-300 underline"
              }
              target={"_blank"}
              rel={"noopener noreferrer"}
	     >
	     gen-mcp
	     </a>
	     &nbsp;and&nbsp;
	    <a
	      href={"https://github.com/mcpchecker/mcpchecker"}
              className={
                "font-semibold transition-colors text-cyan-900 hover:text-cyan-600 dark:text-cyan-400 hover:dark:text-cyan-300 underline"
              }
              target={"_blank"}
              rel={"noopener noreferrer"}
	     >
	     mcpchecker
	     </a>
	     , and I currently maintain the&nbsp;
	    <a
	      href={"https://github.com/containers/kubernetes-mcp-server"}
              className={
                "font-semibold transition-colors text-cyan-900 hover:text-cyan-600 dark:text-cyan-400 hover:dark:text-cyan-300 underline"
              }
              target={"_blank"}
              rel={"noopener noreferrer"}
	     >
	     Kubernetes MCP Server
	     </a>
	     . I am also a&nbsp;
	    <a
	      href={"https://github.com/knative/eventing"}
              className={
                "font-semibold transition-colors text-cyan-900 hover:text-cyan-600 dark:text-cyan-400 hover:dark:text-cyan-300 underline"
              }
              target={"_blank"}
              rel={"noopener noreferrer"}
	     >
	     Knative Eventing
	     </a> maintainer and UX Working Group Lead.
          </p>
          <br />
	  <p>
	  I specialize in translating theoretical concepts into robust systems. My background in Engineering Science
	  focused on deriving engineering concepts from first principles,
	  leading to a thesis where I built mathematical frameworks and code to analyze how Agents use context for decisions. This
	  rigorous blend of theory and application drives my work in the Cloud Native and MCP ecosystems as
	  a CNCF Ambassador and open source maintainer.
	  </p>
	  <br />
          <p>
            I am a strong advocate for student involvement in technology, especially within Open Source.
            I co-founded the&nbsp;
            <a
              href={"https://utoss.github.io/community/"}
              className={
                "font-semibold transition-colors text-cyan-900 hover:text-cyan-600 dark:text-cyan-400 hover:dark:text-cyan-300 underline"
              }
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              University of Toronto Open Source Society (UTOSS)
            </a>
	    while I was an undergrad student, and currently work with student groups
	    as well as the CNCF TOC Mentoring Subproject to help students get involved in Open Source.
          </p>
          <br />
          <p>
	  If you are interested in contributing to open source, or you have an interesting project regarding MCP, AI Agents,
	  or CNCF technologies, please reach out!
          </p>
        </div>
      </div>
    </main>
  );
}
