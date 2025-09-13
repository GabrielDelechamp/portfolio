interface FakeCodeProps {
  name: string;
  email: string;
  message: string;
}

export default function FakeCode({ name, email, message }: FakeCodeProps) {
  const date = new Date();
  const currentDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;

  // Ajoute un saut de ligne tous les 40 caractères
  const formatMessage = (msg: string): string => {
    if (!msg) return "";
    return msg.match(/.{1,40}/g)?.join("\n") ?? msg;
  };

  return (
    <div className="font-mono text-sm leading-relaxed">
      <p>
        &nbsp;1 <span className="ml-5">
          <span className="text-[#C98BDF]">const</span>{" "}
          <span className="text-[#4D5BCE]">button</span>{" "}
          <span className="text-[#C98BDF]">=</span>{" "}
          <span className="text-[#4D5BCE]">document</span>.
          <span className="text-[#4D5BCE]">querySelector</span>(
          <span className="text-[#FEA55F]">'#sendBtn'</span>)
        </span>
      </p>
      <p>&nbsp;2</p>
      <p>
        &nbsp;3 <span className="ml-5">
          <span className="text-[#C98BDF]">const</span>{" "}
          <span className="text-[#4D5BCE]">message</span>{" "}
          <span className="text-[#C98BDF]">=</span> &#123;
        </span>
      </p>
      <p>
        &nbsp;4 <span className="ml-10">
          <span className="text-[#4D5BCE]">name</span>:{" "}
          <span className="text-[#FEA55F]">"{name}"</span>,
        </span>
      </p>
      <p>
        &nbsp;5 <span className="ml-10">
          <span className="text-[#4D5BCE]">email</span>:{" "}
          <span className="text-[#FEA55F]">"{email}"</span>,
        </span>
      </p>
      <p>
        &nbsp;6 <span className="ml-10">
          <span className="text-[#4D5BCE]">message</span>:{" "}
          <pre className="text-[#FEA55F] whitespace-pre-wrap inline-block">
            "{formatMessage(message)}"
          </pre>,
        </span>
      </p>
      <p>
        &nbsp;7 <span className="ml-10">
          date: <span className="text-[#FEA55F]">"{currentDate}"</span>
        </span>
      </p>
      <p>&nbsp;8 <span className="ml-5">&#125;</span></p>
      <p>&nbsp;9</p>
      <p>
        10 <span className="ml-5">
          <span className="text-[#4D5BCE]">button</span>.
          <span className="text-[#4D5BCE]">addEventListener</span>(
          <span className="text-[#FEA55F]">'click'</span>, (){" "}
          <span className="text-[#C98BDF]">=&gt;</span> &#123;
        </span>
      </p>
      <p>
        11 <span className="ml-5">
          <span className="text-[#4D5BCE]">form</span>.
          <span className="text-[#4D5BCE]">send</span>(
          <span className="text-[#4D5BCE]">message</span>)
        </span>
      </p>
      <p>12 <span className="ml-5">&#125;</span>)</p>
    </div>
  );
}
