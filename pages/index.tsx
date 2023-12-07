import { NextPage } from "next";
import { Layout } from "@components/Layout";
import Hero  from "@components/Index/Hero";
import { About } from "@components/Index/About";
import { Company } from "@components/Index/Company";
import { Services } from "@components/Index/Services";
import { Project } from "@components/Index/Project";
import { Contact } from "@components/Index/Contact";
import {Useful} from "@components/Index/Useful";
import {Form} from "@components/Index/Form";
const HomePage: NextPage = () => {
  return (
    <Layout title="Anasayfa" >
      <Hero />

      <About />
      <Services />
      <Project />
      <Contact />
      <Useful />
      <Form/>
<Company/>
    </Layout>
  );
};

export default HomePage;
