import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="relative flex place-items-center text-5xl font-sans font-bold">Calum Murray</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-40 w-4/5">
        <div className="relative flex items-center lg:col-start-2 justify-center top-20 lg:top-0">
          <Image src={"/calum.webp"} alt={"Calum's profile photo"} width={300} height={300} className="rounded-full"/>
        </div>
        <div className="lg:col-start-1 lg:row-start-1">
          <h3 className="text-3xl font-sans font-semibold">Hi, I&apos;m Calum Murray</h3>
          <br/>
          <p>I am a Software Engineering Intern at Red Hat and an Engineering Science Student at the University of Toronto,
          where i major in Electrical and Computer Engineering. I am passionate about Open Source, and I strongly believe
          in building in the open by default. I am interested in the intersection of algorithms, control theory, distributed systems,
          and machine learning.</p>
          <br/>
          <p>
            I am currently working on&nbsp;
            <a
                href={"https://github.com/knative/eventing"}
                className={"font-semibold transition-colors text-cyan-900 hover:text-cyan-600"}
                target={"_blank"}
                rel={"noopener noreferrer"}
            >
              Knative Eventing
            </a>,
            the&nbsp;
            <a
                href={"https://github.com/knative-sandbox/eventing-kafka-broker"}
                className={"font-semibold transition-colors text-cyan-900 hover:text-cyan-6A00"}
                target={"_blank"}
                rel={"noopener noreferrer"}
            >
              Eventing Kafka Broker
            </a>, and a&nbsp;
            <a
                href={"https://knative.dev/blog/articles/getting-started-blog-p0/"}
                className={"font-semibold transition-colors text-cyan-900 hover:text-cyan-6A00"}
                target={"_blank"}
                rel={"noopener noreferrer"}
            >
              Getting Started in Open Source with Knative Blog Series
            </a> through my internship at Red Hat. In my spare time, I am actively developing a&nbsp;
            <a
                href={"https://github.com/Cali0707/git-utils/"}
                className={"font-semibold transition-colors text-cyan-900 hover:text-cyan-6A00"}
                target={"_blank"}
                rel={"noopener noreferrer"}
            >
              set of git utilities
            </a>
            &nbsp;to make specific git workflows I frequently encounter while working in Open Source easier.

          </p>
          <br/>
          <p>If you are interested in getting started contributing to open source, or you have an interesting open source
          project and would like a collaborator, please reach out!</p>
        </div>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://github.com/Cali0707"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            GitHub{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Check out my GitHub Profile.
          </p>
        </a>

        <a
          href="https://www.linkedin.com/in/calum-ra-murray/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            LinkedIn{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Connect with me on LinkedIn!
          </p>
        </a>

        <a
          href="/resume.pdf"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Resume{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Check out my Resume.
          </p>
        </a>

        <a
          href="mailto:calum.murray@mail.utoronto.ca"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Contact{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Get in contact with me.
          </p>
        </a>
      </div>
    </main>
  )
}
