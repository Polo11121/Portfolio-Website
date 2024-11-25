import { FC } from "react";

interface EmailTemplateProps {
  senderName: string;
  content: string;
}

export const EmailTemplate: FC<Readonly<EmailTemplateProps>> = ({
  senderName,
  content,
}) => (
  <div className="max-w-lg mx-auto p-6 bg-gray-100 border border-gray-300 rounded-lg">
    <h2 className="text-xl font-semibold text-blue-600 mb-4">
      Message from {senderName}
    </h2>
    <p className="text-gray-700 text-base">{content}</p>
  </div>
);
