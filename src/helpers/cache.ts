import { RESOURCE_NOT_FOUND } from "@staart/errors";
import NodeCache from "node-cache";
import { CACHE_CHECK_PERIOD, CACHE_TTL } from "../config";
import { CacheCategories } from "../interfaces/enum";
import { query } from "./mysql";

const cache = new NodeCache({
  stdTTL: CACHE_TTL,
  checkperiod: CACHE_CHECK_PERIOD
});

const generateKey = (category: CacheCategories, item: number | string) =>
  `${category}_${item}`;

/**
 * Get an item from the cache
 */
export const getItemFromCache = (
  category: CacheCategories,
  item: number | string
) => {
  const key = generateKey(category, item);
  return cache.get(key);
};

/**
 * Store a new item to the cache
 */
export const storeItemInCache = (
  category: CacheCategories,
  item: number | string,
  value: any
) => {
  const key = generateKey(category, item);
  return cache.set(key, value);
};

/**
 * Delete a specific item from the cache
 */
export const deleteItemFromCache = (
  category: CacheCategories,
  item: number | string
) => {
  const key = generateKey(category, item);
  return cache.del(key);
};

/**
 * Return the results of a database query by first checking the cache
 */
export const cachedQuery = async (
  category: CacheCategories,
  item: number | string,
  queryString: string,
  values?: Array<string | number | boolean | Date | undefined>
) => {
  const cachedItem = getItemFromCache(category, item);
  if (cachedItem && cachedItem !== "undefined") return cachedItem;
  const databaseItem = await query(queryString, values);
  if (databaseItem) {
    storeItemInCache(category, item, databaseItem);
    return databaseItem;
  }
  throw new Error(RESOURCE_NOT_FOUND);
};
