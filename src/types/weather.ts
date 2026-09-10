export interface ForecastItem {
  dt: number;
  main: {
    humidity: number;
    temp: number;
  };
  weather: Array<{
    description: string;
    icon: string;
  }>;
}
