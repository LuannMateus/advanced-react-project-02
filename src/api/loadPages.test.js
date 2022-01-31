import config from '../config';
import { loadPages } from './loadPages';
import * as mapDataModule from './mapData';

jest.mock('./mapData', () => {
  return {
    mapData: jest.fn().mockResolvedValue({ mapped: 1 }),
  };
});

let mockFetch = null;
let mockJson = null;

describe('loadPages', () => {
  beforeEach(() => {
    global.fetch = jest.fn();

    mockJson = jest.fn().mockResolvedValue(Promise.resolve({ toJson: 1 }));

    mockFetch = global.fetch;
    mockFetch.mockResolvedValue({ json: mockJson });

    jest.clearAllMocks();
  });

  it('Should call fetch and mapData with correct values', async () => {
    const result = await loadPages();

    expect(mockFetch).toHaveBeenCalledTimes(1);
    expect(mockFetch).toHaveBeenCalledWith(config.url + '/pages/');

    expect(mockJson).toHaveBeenCalledTimes(1);

    expect(mapDataModule.mapData).toHaveBeenCalledTimes(1);
    expect(mapDataModule.mapData).toHaveBeenCalledWith({ toJson: 1 });

    expect(result).toEqual({ mapped: 1 });
  });

  it('Should call fetch with correct slug', async () => {
    await loadPages('atenção testando');

    expect(mockFetch).toHaveBeenCalledWith(
      config.url + '/pages/?slug=atenotestando',
    );
  });
});
