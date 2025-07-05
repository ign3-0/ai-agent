import { createLoader, parseAsInteger, parseAsString } from "nuqs/server";

import { Default_Page } from "@/constants";

export const filtersSearchParams = {
  search: parseAsString.withDefault("").withOptions({ clearOnDefault: true }),
  page: parseAsInteger
    .withDefault(Default_Page)
    .withOptions({ clearOnDefault: true }),
};

export const loadSearchParams = createLoader(filtersSearchParams)