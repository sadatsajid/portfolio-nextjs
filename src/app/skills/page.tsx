import { PageLayout } from '../../components/PageLayout';
import { Tool } from '../../components/tools/Tool';
import { ToolsSection } from '../../components/tools/ToolsSection';
import { Tools } from '../../data/lifeApi';

export const metadata = {
  title: 'Skills - Asif Sadat',
  description:
    'Technologies, tools, and frameworks I use for full-stack development.',
};

export default function Skills() {
  return (
    <>
      <PageLayout
        title="Technologies, tools, and frameworks I use for development."
        intro="Here's a comprehensive list of the technologies and tools I work with."
      >
        <div className="space-y-20">
          {Object.entries(Tools).map(([title, tools]) => (
            <ToolsSection key={title} title={title}>
              {tools.map(tool => (
                <Tool key={tool.title} title={tool.title} href={tool.href}>
                  {tool.description}
                </Tool>
              ))}
            </ToolsSection>
          ))}
        </div>
      </PageLayout>
    </>
  );
}
