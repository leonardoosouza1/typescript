interface ImailTo {
    name: string;
    email: string;
}

interface ImailMessage {
    subject: string;
    body: string;
    attachment?: string[];
}

interface MessageDTO {
    to: ImailTo;
    message: ImailMessage;
}

export default class EmailServices {
    sendMain({ to, message }: MessageDTO) {
        console.log(`Send email =>\n ${to.name} - ${to.email} \n ${message.subject} \n ${message.body}`);
    }
}
