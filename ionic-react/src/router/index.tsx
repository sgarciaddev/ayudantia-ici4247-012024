import { TabsRouter } from './tabs';
import { AccountRouter } from './account';

interface AppRoute {
  path: string;
  component: JSX.Element;
  exact?: boolean;
}

export type { AppRoute };
export { TabsRouter, AccountRouter };
