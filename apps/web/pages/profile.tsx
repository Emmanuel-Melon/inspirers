import Layout from "../layout/layout";

export default function Profile(props) {
  console.log('oweee!');
  console.log(props);
  return (
    <Layout>
      <h1>Profile</h1>
    </Layout>
  );
}

export function getStaticProps(context) {
  console.log(context);

  return {
    props: {}
  }

}