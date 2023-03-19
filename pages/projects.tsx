import { Container } from "../components/util/container";
import { Section } from "../components/util/section";
import { client } from "../.tina/__generated__/client";
import { Layout } from "../components/layout";
import { Projects } from "../components/projects";

export default function HomePage(
  props: AsyncReturnType<typeof getStaticProps>["props"]
) {
  const projects = props.data.projectConnection.edges;

  return (
    <Layout>
      <Section className="flex-1">
        <Container size="large" width="small">
          <Projects data={projects} />
        </Container>
      </Section>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const tinaProps = await client.queries.projectPageQuery();
  return {
    props: {
      ...tinaProps,
    },
  };
};

export type AsyncReturnType<T extends (...args: any) => Promise<any>> =
  T extends (...args: any) => Promise<infer R> ? R : any;