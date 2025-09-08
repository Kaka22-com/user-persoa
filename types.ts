export interface Persona {
  name: string;
  imageUrl: string;
  quote: string;
  about: {
    age: number;
    occupation: string;
    location: string;
  };
  bio: string;
  apps: string[];
  painPoints: string;
  goals: string;
  skills: { name: string; level: number }[]; // level 1-5 for dots
}
