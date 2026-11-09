/*
 * Autor: Hispafox
 * Fecha: 2026-11-09
 * Versión: 1.0.0
 * Descripción: Modelo de ejemplo para previsiones meteorológicas del proyecto.
 */
namespace TodoApi;

public class WeatherForecast
{
    public DateOnly Date { get; set; }

    public int TemperatureC { get; set; }

    public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);

    public string? Summary { get; set; }
}
