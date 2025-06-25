import { AboutSection } from "@/src/presentation/modules/about-section";
interface AboutPageProps {
  params: {
    id: string
  }
}
export default async function AboutPage({params}:AboutPageProps) {
  const {id} =await  params
  return <AboutSection id={id} />;
}
