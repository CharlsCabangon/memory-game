import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useCallback } from 'react';
import { fetchPokemons } from '@/services/pokeService';

import { DEFAULT_STALE, DEFAULT_CACHE } from '@/lib/constants';

export const pokemonKeys = {
  all: ['pokemons'],
  lists: () => [...pokemonKeys.all, 'list'],
  list: (count) => [...pokemonKeys.lists(), { count }],
};

export function usePokemons(count, options = {}) {
  const { enabled = false, ...queryOptions } = options;

  return useQuery({
    queryKey: pokemonKeys.list(count),
    queryFn: ({ signal }) => fetchPokemons(count, { signal }),
    enabled,
    staleTime: DEFAULT_STALE,
    cacheTime: DEFAULT_CACHE,
    refetchOnWindowFocus: false,
    retry: 1,
    ...queryOptions,
  });
}

export function usePrefetchPokemons() {
  const queryClient = useQueryClient();

  const prefetch = useCallback(
    (count) =>
      queryClient.prefetchQuery({
        queryKey: pokemonKeys.list(count),
        queryFn: ({ signal }) => fetchPokemons(count, { signal }),
        staleTime: DEFAULT_STALE,
        cacheTime: DEFAULT_CACHE,
      }),
    [queryClient]
  );

  return prefetch;
}
