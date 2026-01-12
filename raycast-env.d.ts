/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Shodan API Key - Your Shodan API key (stored securely) */
  "apiKey": string,
  /** Results Per Page - Number of results to fetch per search */
  "defaultResultsPerPage": "10" | "20" | "50" | "100"
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `search` command */
  export type Search = ExtensionPreferences & {}
  /** Preferences accessible in the `host-lookup` command */
  export type HostLookup = ExtensionPreferences & {}
  /** Preferences accessible in the `favorites` command */
  export type Favorites = ExtensionPreferences & {}
  /** Preferences accessible in the `presets` command */
  export type Presets = ExtensionPreferences & {}
  /** Preferences accessible in the `dns-lookup` command */
  export type DnsLookup = ExtensionPreferences & {}
  /** Preferences accessible in the `exploits` command */
  export type Exploits = ExtensionPreferences & {}
  /** Preferences accessible in the `alerts` command */
  export type Alerts = ExtensionPreferences & {}
  /** Preferences accessible in the `account` command */
  export type Account = ExtensionPreferences & {}
  /** Preferences accessible in the `history` command */
  export type History = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `search` command */
  export type Search = {}
  /** Arguments passed to the `host-lookup` command */
  export type HostLookup = {
  /** IP Address */
  "ip": string
}
  /** Arguments passed to the `favorites` command */
  export type Favorites = {}
  /** Arguments passed to the `presets` command */
  export type Presets = {}
  /** Arguments passed to the `dns-lookup` command */
  export type DnsLookup = {}
  /** Arguments passed to the `exploits` command */
  export type Exploits = {}
  /** Arguments passed to the `alerts` command */
  export type Alerts = {}
  /** Arguments passed to the `account` command */
  export type Account = {}
  /** Arguments passed to the `history` command */
  export type History = {}
}

