package com.example.demo.repository;
// import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
// import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

// import com.example.demo.model.House_Details;
import com.example.demo.model.Reservation;


public interface ReservationRepository extends JpaRepository<Reservation, Integer> {
    @Modifying
    @Transactional
    @Query(value = "delete from Reservation where house_id = ?1 and pg_id = ?2", nativeQuery = true)
    public void cancelReservation(Integer house_id, Integer pg_id);
 
    // @Query("SELECT * FROM Reservation where house_id = ?1 and pg_id = ?2")
    // public List<Reservation> findByHouseIdAndPgId(Integer house_id, Integer pg_id);

    @Modifying
    @Transactional
    @Query("UPDATE Reservation SET status = ?3 WHERE house_id = ?1 AND pg_id = ?2")
    public int updateHouseRequest(Integer house_id, Integer pg_id, String status);


}
