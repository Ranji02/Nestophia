package com.example.demo.repository;
// import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
// import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.model.Reservation;


public interface ReservationRepository extends JpaRepository<Reservation, Integer> {
    @Modifying
    @Transactional
    @Query(value = "delete from Reservation where house_id = ?1 and pg_id = ?2", nativeQuery = true)
    public void cancelReservation(Integer house_id, Integer pg_id);
    
}
