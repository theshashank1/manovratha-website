export type PageRoute = 
  | 'home' 
  | 'about' 
  | 'professionals' 
  | 'organizations' 
  | 'wellness' 
  | 'careers' 
  | 'faq' 
  | 'contact' 
  | 'privacy';

export interface NavItem {
  label: string;
  route: PageRoute;
}

export interface WeatherOption {
  id: string;
  label: string;
  icon: string;
  bgColorClass: string;
  textColorClass: string;
}

export interface Pillar {
  id: string;
  icon: string;
  title: string;
  bgColorClass: string;
}
