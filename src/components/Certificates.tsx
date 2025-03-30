
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

import { certif, award } from "../utils/certificate";


interface Certificate {
  id: number;
  name: string;
  issuer: string;
  issueDate: string;
  image: string;
  credential?: string;
}

interface Award {
  id: number;
  name: string;
  issuer: string;
  issueDate: string;
  description: string;
  image: string;
}

const certificates: Certificate[] = [
  {
    id: 1,
    name: "Alibaba Cloud Certified Developers - 1",
    issuer: "Alibaba Cloud",
    issueDate: "Sep 2023",
    image: certif[0],
    credential: "ACCD0119700100000659"
  } 
];

const awards: Award[] = [
  {
    id: 1,
    name: "Juara 2 Design Profil Produk Inovasi kategori E-Government",
    issuer: "KMIPN VI 2024",
    issueDate: "Mar 2024",
    description: "An award received in a national competition among state polytechnics, held in Jakarta over three days, featuring intense competition and numerous outstanding projects..",
    image: award[0]
  },
  {
    id: 2,
    name: "BEST PRESENTATION",
    issuer: "KMIPN IV 2022",
    issueDate: "Aug 2022",
    description: "An award received in a national competition among state polytechnics, held in Batam over three days, featuring intense competition and numerous outstanding projects..",
    image: award[1]
  }
];

const Certificates = () => {
  const [selectedTab, setSelectedTab] = useState<string>("certificates");

  return (
    <section id="certificates" className="py-20 px-6 lg:px-20">
      <h2 className="section-title text-center w-full mb-12">Certificates & Awards</h2>
      
      <Tabs defaultValue="certificates" className="w-full" onValueChange={setSelectedTab}>
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
          <TabsTrigger value="certificates">Certificates</TabsTrigger>
          <TabsTrigger value="awards">Awards</TabsTrigger>
        </TabsList>
        
        <TabsContent value="certificates" className="animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificates.map((cert) => (
              <Dialog key={cert.id}>
                <DialogTrigger asChild>
                  <div className="project-card cursor-pointer">
                    <div className="h-40 overflow-hidden">
                      <img 
                        src={cert.image} 
                        alt={cert.name} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-1 text-primary">{cert.name}</h3>
                      <div className="flex justify-between items-center">
                        <p className="text-sm text-primary/70">{cert.issuer}</p>
                        <p className="text-xs text-accent">{cert.issueDate}</p>
                      </div>
                      <Button variant="ghost" size="sm" className="mt-2 text-accent p-0 flex items-center gap-1">
                        View Certificate <ArrowUpRight size={14} />
                      </Button>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-xl">
                  <DialogHeader>
                    <DialogTitle className="text-2xl">{cert.name}</DialogTitle>
                  </DialogHeader>
                  <div className="mt-4">
                    <img 
                      src={cert.image}
                      alt={cert.name}
                      className="w-full h-auto rounded-md shadow-md mb-4"
                    />
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="font-semibold">Issuer</p>
                        <p>{cert.issuer}</p>
                      </div>
                      <div>
                        <p className="font-semibold">Issue Date</p>
                        <p>{cert.issueDate}</p>
                      </div>
                      {cert.credential && (
                        <div className="col-span-2">
                          <p className="font-semibold">Credential ID</p>
                          <p>{cert.credential}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="awards" className="animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {awards.map((award) => (
              <Dialog key={award.id}>
                <DialogTrigger asChild>
                  <div className="project-card cursor-pointer flex flex-col md:flex-row">
                    <div className="h-40 md:w-1/3 overflow-hidden">
                      <img 
                        src={award.image} 
                        alt={award.name} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <div className="p-4 md:w-2/3">
                      <h3 className="text-lg font-semibold mb-1 text-primary">{award.name}</h3>
                      <div className="flex justify-between items-center mb-2">
                        <p className="text-sm text-primary/70">{award.issuer}</p>
                        <p className="text-xs text-accent">{award.issueDate}</p>
                      </div>
                      <p className="text-sm text-primary/70 line-clamp-2">{award.description}</p>
                      <Button variant="ghost" size="sm" className="mt-2 text-accent p-0 flex items-center gap-1">
                        View Details <ArrowUpRight size={14} />
                      </Button>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-xl">
                  <DialogHeader>
                    <DialogTitle className="text-2xl">{award.name}</DialogTitle>
                  </DialogHeader>
                  <div className="mt-4">
                    <img 
                      src={award.image}
                      alt={award.name}
                      className="w-full h-auto rounded-md shadow-md mb-4"
                    />
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div>
                        <p className="font-semibold">Issuer</p>
                        <p>{award.issuer}</p>
                      </div>
                      <div>
                        <p className="font-semibold">Date</p>
                        <p>{award.issueDate}</p>
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold mb-2">Description</p>
                      <p className="text-gray-700">{award.description}</p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default Certificates;
