import * as React from "@types/react";

declare module "react" {
  type RFC<T = unknown> = React.FC<
    T & { children: ReactElement<any, any> | null }
  >;
}
