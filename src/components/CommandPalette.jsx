import React, { useEffect, useState, useRef } from 'react';
import { personalInfo } from '../data/portfolioData';

export default function CommandPalette({
  isOpen,
  onClose,
  onOpenResume,
  onOpenAi,
  onTriggerEasterEgg,
}) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  const actions = [
    {
      id: 'home',
      label: 'Go to Hero / Home',
      category: 'Navigation',
      icon: '🏠',
      shortcut: 'H',
      perform: () => {
        const el = document.getElementById('home');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      id: 'about',
      label: 'About Imman (Bio & Milestones)',
      category: 'Navigation',
      icon: '👤',
      shortcut: 'A',
      perform: () => {
        const el = document.getElementById('about');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      id: 'skills',
      label: 'Explore Technology Constellation',
      category: 'Navigation',
      icon: '⚡',
      shortcut: 'S',
      perform: () => {
        const el = document.getElementById('skills');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      id: 'projects',
      label: 'Inspect Featured Case Studies',
      category: 'Navigation',
      icon: '🚀',
      shortcut: 'P',
      perform: () => {
        const el = document.getElementById('projects');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      id: 'experience',
      label: 'View Work Experience (NEXTGEN & NEURA)',
      category: 'Navigation',
      icon: '💼',
      shortcut: 'E',
      perform: () => {
        const el = document.getElementById('experience');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      id: 'education',
      label: 'View Education & Research (B.E. CSE)',
      category: 'Navigation',
      icon: '🎓',
      shortcut: 'U',
      perform: () => {
        const el = document.getElementById('education');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      id: 'dsa',
      label: 'Problem Solving & DSA Progress',
      category: 'Navigation',
      icon: '🧩',
      shortcut: 'D',
      perform: () => {
        const el = document.getElementById('problem-solving');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      id: 'contact',
      label: 'Contact Imman (Email & Form)',
      category: 'Navigation',
      icon: '📧',
      shortcut: 'C',
      perform: () => {
        const el = document.getElementById('contact');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      id: 'resume',
      label: 'Open Interactive ATS Resume Sheet',
      category: 'Actions',
      icon: '📄',
      shortcut: 'R',
      perform: () => onOpenResume(),
    },
    {
      id: 'pdf',
      label: 'Download Resume (Official PDF)',
      category: 'Actions',
      icon: '📥',
      perform: () => {
        const link = document.createElement('a');
        link.href = '/resume.pdf';
        link.download = 'Imman_Resume.pdf';
        link.click();
      },
    },
    {
      id: 'ai',
      label: 'Ask Imman AI (Portfolio Assistant)',
      category: 'AI Assistant',
      icon: '✦',
      shortcut: 'Q',
      perform: () => onOpenAi(),
    },
    {
      id: 'github',
      label: 'Visit GitHub (@eman860)',
      category: 'External',
      icon: '🐙',
      perform: () => window.open(personalInfo.github, '_blank'),
    },
    {
      id: 'linkedin',
      label: 'Connect on LinkedIn',
      category: 'External',
      icon: '💼',
      perform: () => window.open(personalInfo.linkedin, '_blank'),
    },
    {
      id: 'easter-egg',
      label: 'sudo hire imman',
      category: 'Developer Shell',
      icon: '💻',
      shortcut: 'EXEC',
      perform: () => onTriggerEasterEgg(),
    },
  ];

  const filtered = actions.filter((act) =>
    act.label.toLowerCase().includes(query.toLowerCase()) ||
    act.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (filtered.length || 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filtered.length) % (filtered.length || 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filtered[selectedIndex]) {
          filtered[selectedIndex].perform();
          onClose();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filtered, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div className="cmd-backdrop" onClick={onClose}>
      <div
        className="cmd-modal glass-panel"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="cmd-search-bar">
          <span className="cmd-search-icon">🔍</span>
          <input
            ref={inputRef}
            type="text"
            className="cmd-search-input"
            placeholder="Type a command or jump to section..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
          />
          <kbd className="cmd-esc-badge" onClick={onClose}>
            ESC
          </kbd>
        </div>

        {/* Action Results List */}
        <div className="cmd-results-list">
          {filtered.length === 0 ? (
            <div className="cmd-no-results">
              <p>No matching commands found.</p>
            </div>
          ) : (
            filtered.map((item, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={item.id}
                  className={`cmd-item-row ${isSelected ? 'is-selected' : ''}`}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  onClick={() => {
                    item.perform();
                    onClose();
                  }}
                >
                  <div className="cmd-item-left">
                    <span className="cmd-item-icon">{item.icon}</span>
                    <div className="cmd-item-titles">
                      <span className="cmd-item-name">{item.label}</span>
                      <span className="cmd-item-cat">{item.category}</span>
                    </div>
                  </div>

                  <div className="cmd-item-right">
                    {item.shortcut && <kbd className="cmd-key-tag">{item.shortcut}</kbd>}
                    <span className="cmd-item-enter">↵</span>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer Hint */}
        <div className="cmd-footer-hints">
          <div className="hint-pill">
            <kbd>↑</kbd> <kbd>↓</kbd> <span>Navigate</span>
          </div>
          <div className="hint-pill">
            <kbd>↵</kbd> <span>Select</span>
          </div>
          <div className="hint-pill">
            <kbd>ESC</kbd> <span>Close</span>
          </div>
        </div>
      </div>
    </div>
  );
}
