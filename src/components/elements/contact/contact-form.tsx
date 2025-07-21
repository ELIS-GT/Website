"use client";

// form
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import validator from "validator";

// lib
import { cn } from "@/lib/utils";

// shadcn components
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Send, User, Mail, Phone, MessageSquare, Package } from "lucide-react";

type Props = {
  className?: string;
};

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z
    .string()
    .min(1, { message: "Email is required." })
    .email("Please enter a valid email address."),
  phone: z
    .string()
    .min(1, { message: "Phone number is required." })
    .refine(validator.isMobilePhone, { message: "Please enter a valid phone number." }),
  service: z.string().min(1, { message: "Please select a service." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const ContactForm = ({ className }: Props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("space-y-5", className)}
      >
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    placeholder="Your full name"
                    {...field}
                    className="w-full h-[50px] md:h-[55px] pl-12 pr-[16px] md:pr-[20px] outline-0 rounded-lg border border-gray-200 focus:border-[#7e4192] focus:ring-2 focus:ring-[#7e4192]/20 transition-all duration-200"
                  />
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
              <FormControl>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    placeholder="your.email@company.com"
                    type="email"
                    {...field}
                    className="w-full h-[50px] md:h-[55px] pl-12 pr-[16px] md:pr-[20px] outline-0 rounded-lg border border-gray-200 focus:border-[#7e4192] focus:ring-2 focus:ring-[#7e4192]/20 transition-all duration-200"
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    placeholder="Your phone number"
                    type="tel"
                    {...field}
                    className="w-full h-[50px] md:h-[55px] pl-12 pr-[16px] md:pr-[20px] outline-0 rounded-lg border border-gray-200 focus:border-[#7e4192] focus:ring-2 focus:ring-[#7e4192]/20 transition-all duration-200"
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="service"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="relative">
                  <Package className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 z-10" />
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-full h-[50px] md:h-[55px] pl-12 pr-[16px] md:pr-[20px] outline-0 rounded-lg border border-gray-200 focus:border-[#7e4192] focus:ring-2 focus:ring-[#7e4192]/20 transition-all duration-200">
                      <SelectValue placeholder="What logistics service interests you?" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border border-gray-200 rounded-lg shadow-lg">
                      <SelectItem value="elis-gt" className="hover:bg-[#7e4192]/10">
                        <div className="flex flex-col">
                          <span className="font-medium">ELIS GT - Global Trade</span>
                          <span className="text-xs text-gray-500">International shipping & customs</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="elis-gl" className="hover:bg-[#0e7d80]/10">
                        <div className="flex flex-col">
                          <span className="font-medium">ELIS GL - Global Logistics</span>
                          <span className="text-xs text-gray-500">End-to-end supply chain management</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="demo" className="hover:bg-gray-50">
                        <div className="flex flex-col">
                          <span className="font-medium">Live Platform Demo</span>
                          <span className="text-xs text-gray-500">See ELIS in action</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="partnership" className="hover:bg-gray-50">
                        <div className="flex flex-col">
                          <span className="font-medium">Partnership Inquiry</span>
                          <span className="text-xs text-gray-500">Explore collaboration opportunities</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="other" className="hover:bg-gray-50">
                        <div className="flex flex-col">
                          <span className="font-medium">Other</span>
                          <span className="text-xs text-gray-500">Custom logistics solution</span>
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 text-gray-400 w-5 h-5" />
                  <Textarea
                    placeholder="Tell us about your logistics needs, challenges, or how we can help optimize your supply chain..."
                    className="resize-none w-full h-[120px] md:h-[140px] pt-4 pl-12 pr-4 pb-4 outline-0 rounded-lg border border-gray-200 focus:border-[#7e4192] focus:ring-2 focus:ring-[#7e4192]/20 transition-all duration-200"
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button 
          variant="primary" 
          type="submit" 
          className="w-full h-[50px] md:h-[55px] bg-gradient-to-r from-[#7e4192] to-[#0e7d80] hover:from-[#7e4192]/90 hover:to-[#0e7d80]/90 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group"
        >
          <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          Send Message
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
