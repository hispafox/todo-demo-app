/*
 * Autor: Hispafox
 * Fecha: 2026-11-09
 * Versión: 1.0.0
 * Descripción: DTO de entrada para actualizar una tarea existente.
 */
using System.ComponentModel.DataAnnotations;

namespace TodoApi.DTOs;

public class UpdateTodoDto
{
    [Required]
    [StringLength(200)]
    public string Title { get; set; } = string.Empty;

    [StringLength(1000)]
    public string? Description { get; set; }

    public bool IsCompleted { get; set; }
}
