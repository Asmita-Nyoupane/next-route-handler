import ClientComponentOne from "@/Components/client-component-one";
import ClientComponentTwo from "@/Components/client-component-two";
import ServerComponentOne from "@/Components/server-component-one";
import ServerComponentTwo from "@/Components/server-component-two";

const InterLeavingPage = () => {
  return (
    <div>
      <h2>InterLeavingPage</h2>
      <ClientComponentOne>
        <ServerComponentOne />
        <ClientComponentTwo />
        <ServerComponentTwo />
      </ClientComponentOne>
    </div>
  );
};

export default InterLeavingPage;
