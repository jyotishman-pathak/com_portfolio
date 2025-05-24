"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Mail, MessageSquare, Send, Github, Linkedin } from "lucide-react";
import Link from "next/link";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast({
      title: "Message Sent",
      description: "We'll get back to you as soon as possible.",
    });
    
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground text-lg">
            Have a project in mind? We'd love to hear from you. Fill out the form below 
            and we'll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Card>
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl">Contact Us</CardTitle>
              <CardDescription>
                Fill out the form below to start a conversation.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Input placeholder="Your name" {...field} />
                              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                                <MessageSquare className="h-4 w-4 text-muted-foreground" />
                              </div>
                              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              </div>
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Input type="email" placeholder="Your email" {...field} />
                              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                                <Mail className="h-4 w-4 text-muted-foreground" />
                              </div>
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your project..."
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button 
                    type="submit" 
                    className="w-full sm:w-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>Processing...</>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold mb-4">Other Ways to Connect</h3>
            <p className="text-muted-foreground mb-6">
              Prefer to reach out directly? You can also contact us at:
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button variant="outline" asChild>
                <Link href="mailto:info@jpdevworks.com">
                  <Mail className="mr-2 h-4 w-4" />
                  jyotishmanpathak28@gmail.com
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}