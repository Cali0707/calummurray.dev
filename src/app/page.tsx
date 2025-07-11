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
            I am a Knative Eventing Maintainer and UX Lead, as well as a CNCF
            ambassador. My current research lies at the intersection of AI,
            Serverless, and Event Driven Systems. I am passionate about Open
            Source, and I strongly believe in building in the open by default. I
            am interested in the intersection of algorithms, uncertainty,
            serverless computing, distributed systems, event driven systems, and
            machine learning.
          </p>
          <br />
          <p>
            I am currently working on&nbsp;
            <a
              href={"https://github.com/knative/eventing"}
              className={
                "font-semibold transition-colors text-cyan-900 hover:text-cyan-600 dark:text-cyan-400 hover:dark:text-cyan-300 underline"
              }
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              Knative Eventing
            </a>
            , the&nbsp;
            <a
              href={
                "https://github.com/knative-extensions/eventing-kafka-broker"
              }
              className={
                "font-semibold transition-colors text-cyan-900 hover:text-cyan-600 dark:text-cyan-400 hover:dark:text-cyan-300 underline"
              }
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              Knative Eventing Kafka Broker
            </a>
            , and I lead&nbsp;
            <a
              href={"https://github.com/knative/ux/"}
              className={
                "font-semibold transition-colors text-cyan-900 hover:text-cyan-600 dark:text-cyan-400 hover:dark:text-cyan-300 underline"
              }
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              Knative UX
            </a>{" "}
            .
          </p>
          <br />
          <p>
            I believe strongly in helping students participate in Open Source,
            and I co-founded the&nbsp;
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
            . Now that I have graduated, I am working to build upon my work at
            UTOSS to create resources to help other universities create their
            own Open Source Societies, as well as to create education resources
            to help students contribute to open source.
          </p>
          <br />
          <p>
            If you are interested in getting started contributing to open
            source, or you have an interesting open source project and would
            like a collaborator, please reach out!
          </p>
        </div>
      </div>
    </main>
  );
}
