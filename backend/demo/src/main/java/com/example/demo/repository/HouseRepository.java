package com.example.demo.repository;
import com.example.demo.model.House_Details;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.model.House;


// @Repository
public interface HouseRepository extends JpaRepository<House, Integer> {

    
    
    @Query("select coalesce(max(h.house_id), 0) from House h")
    public Integer findMaxId();

    // @Query("insert into house_availability(house_id, available_space, status) values(1, 3, 'pending')")
    // public Integer insertHouseAvailability();
    // @PersistenceContext EntityManager entityManager;


    // "HouseAsSingleEntity{house_id=" + house_id + ", houseowner_id = " + houseowner_id  + ", house_name = '" + house_name
    //             + "' , permissible_gender = '" + permissible_gender + "', bhk = '" + bhk  + "', amenities = '" + amenities 
    //             + "', rent_amount = " + rent_amount + ", total_space = " + total_space + "', available_space = " + available_space 
    //             + ", address_line_1 = '" + address_line_1 + "', address_line_1 = '" + address_line_2 + "', city = '" + city 
    //             + "', state = '" + state + "', pincode = '" + pincode + "', house_receipt = '" + house_receipt  +  "', pic1 = '" + pic1 
    //             + "', pic2 = '" + pic2 + "', pic3 = '" + pic3 + "', pic4 = '" + pic4 + "', pic5 = '" + pic5  + "', status = '" + status + "' }";

    // @Query("select house_id, houseowner_id, house_name, permissible_gender, bhk, amenities, rent_amount, total_space, available_space, address_line_1, address_line_2, city, state, pincode, house_receipt, pic1, status from House where status = 'pending'")
    
    public List<House> findByStatus(String status);
    //public List<House> findByHouseId(Integer houseId);

    // @Query(value="SELECT h.houseowner_id, u.name FROM User u JOIN House h ON h.houseowner_id = u.user_id WHERE h.status='pending'",nativeQuery=true)
    // public List<House_Details> getHouseDetails();

    // @Query("SELECT h.houseowner_id, u.name FROM User u JOIN House h ON h.houseowner_id = u.user_id WHERE h.status='pending'",nativeQuery=true)
    // public List<House_Details> getHouseDetails();

    //h.house_id, h.pic1, h.house_name, h.permissible_gender, h.available_space, h.total_space, h.city, h.bhk, h.rent_amount, u.name, h.amenities, u.mobile, h.house_receipt, u.aadhar_card

    
    @Query("SELECT new com.example.demo.model.House_Details(h.house_id, h.pic1, h.house_name, h.permissible_gender, h.available_space, h.total_space, h.city, h.bhk, h.rent_amount, u.name, h.amenities, u.mobile, h.house_receipt, u.aadhar_card) FROM User u JOIN House h ON h.houseowner_id = u.user_id WHERE h.status='pending'")
    public List<House_Details> getHouseDetails();

    @Query("SELECT new com.example.demo.model.House_Details(h.house_id, h.pic1, h.house_name, h.permissible_gender, h.available_space, h.total_space, h.address_line_1, h.address_line_2, h.city, h.bhk, h.rent_amount, u.name, h.amenities, u.mobile, u.email, r.no_of_people, r.status) FROM Reservation r JOIN House h ON r.house_id = h.house_id JOIN User u ON h.houseowner_id = u.user_id WHERE r.house_id = (SELECT r.house_id FROM Reservation WHERE r.pg_id = ?1) AND r.status='pending'")
    public List<House_Details> getMyReservation(Integer pg_id);

    @Query(value = "SELECT * FROM House where permissible_gender = ?1 AND bhk = ?2 AND amenities = ?3 AND rent_amount <= ?4 AND available_space >= ?5 AND city = ?6 AND status = 'accepted'", nativeQuery = true)
    public List<House> getAvailableHouses(String permissible_gender, String bhk, String amenities, Double rent_amount, Integer available_space,String city);
    
    


    
    // public void delete(Optional<House> house);

    // public boolean existsByHouseId(Integer house_id);


    // public static boolean deleteByHouseId(Integer houseId) {
    //     // TODO Auto-generated method stub
    //     return false;
    // }

    // @Query("delete from House h where h.house_id=:house_id")
    // public House deleteByHouseId(@Param("house_id") Integer house_id);
    
}





