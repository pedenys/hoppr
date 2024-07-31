import { afterEach } from "node:test";

import { describe, expect, it } from "vitest";

import { getEnvironmentVariable } from "@/utils/environment/getEnvironmentVariable/utils";

const MOCK_ENVIRONMENT_VARIABLE = "true";
const originalProcessEnv = process.env;

describe("getEnvironmentVariable", () => {
  afterEach(() => {
    process.env = originalProcessEnv;
  });
  it("returns correct value when provided an existing environmnent variable", () => {
    process.env["MOCK_ENVIRONMENT_VARIABLE"] = MOCK_ENVIRONMENT_VARIABLE;

    const result = getEnvironmentVariable("MOCK_ENVIRONMENT_VARIABLE");

    expect(result).toBe(MOCK_ENVIRONMENT_VARIABLE);
  });

  it("returns `undefined` when provided a non-existing environmnent variable", () => {
    const result = getEnvironmentVariable("NON_EXISTING_ENV_VARIABLE");

    expect(result).toBe(undefined);
  });
});
