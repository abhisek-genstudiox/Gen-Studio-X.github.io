import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { X } from "lucide-react";

interface FooterPopupProps {
  type: 'privacy' | 'terms' | 'security';
  children: React.ReactNode;
}

const FooterPopup: React.FC<FooterPopupProps> = ({ type, children }) => {
  const getTitle = () => {
    switch (type) {
      case 'privacy':
        return 'Privacy Policy';
      case 'terms':
        return 'Terms of Service';
      case 'security':
        return 'Security Policy';
      default:
        return '';
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button variant="link" className="text-white/60 hover:text-[#E6C88C] p-0 h-auto">
            {children}
          </Button>
        </motion.div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] bg-black/90 backdrop-blur-lg border-white/10">
        <DialogHeader>
          <DialogTitle className="text-[#E6C88C] font-display">{getTitle()}</DialogTitle>
          <DialogClose asChild>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-4 text-white/60 hover:text-[#E6C88C] hover:bg-white/5"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </DialogClose>
        </DialogHeader>
        <div className="mt-4 text-white/80 font-display space-y-4">
          {type === 'privacy' && (
            <>
              <p>At GenStudioX, we take your privacy seriously. This Privacy Policy describes how we collect, use, and protect your personal information.</p>
              <h3 className="text-[#E6C88C] font-bold">Information We Collect</h3>
              <p>We collect information that you provide directly to us, including but not limited to:</p>
              <ul className="list-disc pl-6">
                <li>Contact information (email, name)</li>
                <li>Account credentials</li>
                <li>Usage data and analytics</li>
              </ul>
            </>
          )}

          {type === 'terms' && (
            <>
              <p>By accessing and using GenStudioX, you agree to be bound by these Terms of Service.</p>
              <h3 className="text-[#E6C88C] font-bold">User Responsibilities</h3>
              <p>As a user of our platform, you agree to:</p>
              <ul className="list-disc pl-6">
                <li>Provide accurate information</li>
                <li>Use the service in compliance with applicable laws</li>
                <li>Respect intellectual property rights</li>
              </ul>
            </>
          )}

          {type === 'security' && (
            <>
              <p>GenStudioX implements industry-standard security measures to protect your data.</p>
              <h3 className="text-[#E6C88C] font-bold">Security Measures</h3>
              <p>We employ various security measures including:</p>
              <ul className="list-disc pl-6">
                <li>End-to-end encryption</li>
                <li>Regular security audits</li>
                <li>Secure data storage</li>
                <li>Access controls and authentication</li>
              </ul>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FooterPopup; 