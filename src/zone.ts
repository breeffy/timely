import type { FormatOptions } from "./types";

/**
 * @interface
 */
export default abstract class Zone {
  /**
   * The type of zone
   * @abstract
   * @type {string}
   */
  abstract get type(): string;

  /**
   * The name of this zone.
   * @abstract
   * @type {string}
   */
  abstract get name(): string;
  /**
   * Returns whether the offset is known to be fixed for the whole year.
   * @abstract
   * @type {boolean}
   */
  abstract get isUniversal(): boolean;
  /**
   * Returns the offset's common name (such as EST) at the specified timestamp
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the name
   * @param {Object} opts - Options to affect the format
   * @param {string} opts.format - What style of offset to return. Accepts 'long' or 'short'.
   * @param {string} opts.locale - What locale to return the offset name in.
   * @return {string|null}
   */
  abstract offsetName(_ts: number, _opts: FormatOptions): string | null;
  /**
   * Returns the offset's value as a string
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the offset
   * @param {string} format - What style of offset to return.
   *                          Accepts 'narrow', 'short', or 'techie'. Returning '+6', '+06:00', or '+0600' respectively
   * @return {string}
   */
  abstract formatOffset(_ts: number, _format: string): string;
  /**
   * Return the offset in minutes for this zone at the specified timestamp.
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to compute the offset
   * @return {number}
   */
  abstract offset(_ts: number): number;
  /**
   * Return whether this Zone is equal to another zone
   * @abstract
   * @param {Zone} otherZone - the zone to compare
   * @return {boolean}
   */
  abstract equals(_otherZone: Zone): boolean;
  /**
   * Return whether this Zone is valid.
   * @abstract
   * @type {boolean}
   */
  abstract get isValid(): boolean;
}
