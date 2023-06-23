// package com.example.demo.repository;

// import java.util.List;

// import org.springframework.data.jpa.repository.JpaRepository;
// import org.springframework.data.jpa.repository.Query;

// import com.example.demo.model.House_Details;

// public interface House_DetailsRepository extends JpaRepository<House_Details, Integer> {
    
//     @Query(value="SELECT h.houseowner_id, u.name FROM User u JOIN House h ON h.houseowner_id = u.user_id WHERE h.status='pending'",nativeQuery=true)
//     public List<House_Details> getHouseDetails();
// }
