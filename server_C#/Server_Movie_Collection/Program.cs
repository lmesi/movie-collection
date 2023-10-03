using Microsoft.EntityFrameworkCore;
using Server_Movie_Collection.Model;
using Server_Movie_Collection.Service;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddDbContext<MediaCollectionContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConfiguration"));
});
builder.Services.AddTransient<IMovieService, MovieService>();
builder.Services.AddTransient<IDirectorService, DirectorService>();
builder.Services.AddTransient<ISeriesService, SeriesService>();
builder.Services.AddTransient<ICollectionService, CollectionService>();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();