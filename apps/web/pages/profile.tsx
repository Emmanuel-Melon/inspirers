import Layout from "../layout/layout";

export default function Profile(props) {
  return (
    <Layout>
      <h1>Profile</h1>
    </Layout>
  );
}

export async function getStaticProps(context) {
    // Fetch data from external API
    const res = await fetch(`http://localhost:5000/api/users/1`)
    const data = await res.json();

    return {
      props: {}, // will be passed to the page component as props
    }

}