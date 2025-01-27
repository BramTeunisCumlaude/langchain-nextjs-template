import { ChatWindow } from "@/components/ChatWindow";
import { GuideInfoBox } from "@/components/guide/GuideInfoBox";

export default function Home() {
  const InfoCard = (
    <GuideInfoBox>
      <ul>
        <li className="text-l">
          <span className="ml-2">
            Ask here your questions and we will create a paper for you
          </span>
        </li>
      </ul>
    </GuideInfoBox>
  );
  return (
    <ChatWindow
      endpoint="api/chat"
      emoji="🏴‍☠️"
      placeholder="I'm an LLM trained on all interflon data"
      emptyStateComponent={InfoCard}
    />
  );
}
