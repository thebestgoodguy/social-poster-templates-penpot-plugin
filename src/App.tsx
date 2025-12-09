import { useState } from 'react';
import {
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  LayoutTemplate,
  Video,
  Pin,
  Ghost,
  Twitch
} from 'lucide-react';
import './App.css';
import { templates, type SocialTemplate } from './data/templates';

function App() {
  const [selectedPlatform, setSelectedPlatform] = useState<string>('All');

  const platforms = ['All', ...new Set(templates.map((t) => t.platform))];

  const filteredTemplates =
    selectedPlatform === 'All'
      ? templates
      : templates.filter((t) => t.platform === selectedPlatform);

  const handleTemplateClick = (template: SocialTemplate) => {
    parent.postMessage(
      {
        type: 'create-template',
        payload: {
          width: template.width,
          height: template.height,
          name: template.name,
        },
      },
      '*'
    );
  };

  const getIcon = (platform: string) => {
    switch (platform) {
      case 'Instagram': return <Instagram size={32} strokeWidth={1.5} />;
      case 'Facebook': return <Facebook size={32} strokeWidth={1.5} />;
      case 'Twitter': return <Twitter size={32} strokeWidth={1.5} />;
      case 'LinkedIn': return <Linkedin size={32} strokeWidth={1.5} />;
      case 'YouTube': return <Youtube size={32} strokeWidth={1.5} />;
      case 'TikTok': return <Video size={32} strokeWidth={1.5} />;
      case 'Pinterest': return <Pin size={32} strokeWidth={1.5} />;
      case 'Snapchat': return <Ghost size={32} strokeWidth={1.5} />;
      case 'Twitch': return <Twitch size={32} strokeWidth={1.5} />;
      default: return <LayoutTemplate size={32} strokeWidth={1.5} />;
    }
  };

  return (
    <div className="app-container">
      <div className="sticky-header">
        <div className="section-title">YOUR COLLECTIONS</div>

        <div className="filter-container">
          <select
            className="platform-select"
            value={selectedPlatform}
            onChange={(e) => setSelectedPlatform(e.target.value)}
          >
            {platforms.map((platform) => (
              <option key={platform} value={platform}>
                {platform}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="section-title">TEMPLATES</div>

      <div className="templates-grid">
        {filteredTemplates.map((template) => (
          <div
            key={template.name}
            className="template-card"
            onClick={() => handleTemplateClick(template)}
          >
            <div className="card-icon">
              {getIcon(template.platform)}
            </div>
            <div className="template-info">
              <h3>{template.name}</h3>
              <p>{template.width} x {template.height}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
