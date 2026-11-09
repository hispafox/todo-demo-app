/*
 * Autor: Hispafox
 * Fecha: 2026-11-09
 * Versión: 1.0.0
 * Descripción: Contexto EF Core para la base de datos de tareas.
 */
using Microsoft.EntityFrameworkCore;
using TodoApi.Models;

namespace TodoApi.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }

    public DbSet<TodoItem> Todos => Set<TodoItem>();
}
