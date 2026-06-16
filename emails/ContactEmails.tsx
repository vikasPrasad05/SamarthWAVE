import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Hr,
} from "@react-email/components";

interface ContactEmailProps {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactEmail({ name, email, phone, message }: ContactEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New contact form submission from {name}</Preview>
      <Body className="bg-gray-100 font-sans">
        <Container className="bg-white mx-auto p-6 sm:p-8 md:p-12 my-8 rounded-xl shadow-sm">
          <Heading className="text-gray-900 text-2xl sm:text-3xl font-bold my-10 text-center">
            New Contact Form Submission
          </Heading>
          <Hr className="border-gray-300 my-5" />

          {/* Name */}
          <Section className="mb-4 sm:mb-6 px-2 sm:px-4">
            <Text className="text-gray-600 text-sm font-semibold mb-1">Name:</Text>
            <Text className="text-gray-900 text-base sm:text-lg">{name}</Text>
          </Section>

          {/* Email */}
          <Section className="mb-4 sm:mb-6 px-2 sm:px-4">
            <Text className="text-gray-600 text-sm font-semibold mb-1">Email:</Text>
            <Text className="text-gray-900 text-base sm:text-lg">{email}</Text>
          </Section>

          {/* Phone */}
          <Section className="mb-4 sm:mb-6 px-2 sm:px-4">
            <Text className="text-gray-600 text-sm font-semibold mb-1">Phone:</Text>
            <Text className="text-gray-900 text-base sm:text-lg">{phone}</Text>
          </Section>

          {/* Message */}
          <Section className="mb-4 sm:mb-6 px-2 sm:px-4">
            <Text className="text-gray-600 text-sm font-semibold mb-1">Message:</Text>
            <Text className="text-gray-900 text-base sm:text-lg">{message}</Text>
          </Section>

          <Hr className="border-gray-300 my-5" />

          <Text className="text-gray-500 text-xs sm:text-sm text-center px-2 sm:px-4">
            This email was sent from <span className="font-semibold">SAMARTHWAVE HOSPITALITY</span> contact form
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
