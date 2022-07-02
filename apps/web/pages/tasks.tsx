import Layout from "../layout/layout";

export default function Tasks(props) {
  return (
    <Layout>
      <h1>Tasks</h1>
    </Layout>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:5000/api/tasks/user/1`)
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } }
}
