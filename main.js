import { AppHeader } from './components/AppHeader.js';
import { HeroSection } from './components/HeroSection.js';
import { StyleSection } from './components/StyleSection.js';
import { TrendsSection } from './components/TrendsSection.js';
import { JoinSection } from './components/JoinSection.js';
import { StudioCard } from './components/StudioCard.js';
import { StudiosSection } from './components/StudiosSection.js';
import { MaterialsSection } from './components/MaterialsSection.js';
import { AppFooter } from './components/AppFooter.js';

const components = {
    'app-header': AppHeader,
    'hero-section': HeroSection,
    'style-section': StyleSection,
    'trends-section': TrendsSection,
    'join-section': JoinSection,
    'studio-card': StudioCard,
    'studios-section': StudiosSection,
    'materials-section': MaterialsSection,
    'app-footer': AppFooter
};

Object.entries(components).forEach(([tagName, componentClass]) => {
    if (!customElements.get(tagName)) {
        customElements.define(tagName, componentClass);
    }
});