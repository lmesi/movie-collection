using Server_Movie_Collection.Entities;
using Server_Movie_Collection.Model.DTO;

namespace Server_Movie_Collection.Service;

public interface ISeriesService
{
    Task<List<Series>> GetAllSeries();
    SeriesDetailsDto? GetSeriesById(long seriesId);
    Task<List<Series>> GetFirstFiveSeries();
    Task<bool> AddSeries(SeriesDto seriesDto);
    Task<HashSet<Series>> SearchForSeries(String? title, int year);
}