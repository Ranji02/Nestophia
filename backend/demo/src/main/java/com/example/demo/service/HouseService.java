package com.example.demo.service;

// import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
// import org.springframework.transaction.annotation.Transactional;

import com.example.demo.model.House;
import com.example.demo.model.House_Details;
import com.example.demo.model.Reservation;
import com.example.demo.repository.HouseRepository;
import com.example.demo.repository.ReservationRepository;

import org.apache.commons.lang3.StringUtils;

import java.util.*;

// import java.util.*;

@Service
public class HouseService {

    @Autowired
    public HouseRepository houseRepository;

    @Autowired
    public ReservationRepository reservationRepository;

    public House insertHouse(House h){
        h.setHouseId(houseRepository.findMaxId() + 1);
        System.out.println("Avail space :"+h.getAvailableSpace());
     
        return houseRepository.save(h);
    }

    public Reservation insertReservation(Reservation r){
        return reservationRepository.save(r);
    }

    public List<House> getAllHouses(){
        return (List<House>)houseRepository.findAll();
    }

    // public String deleteHouse(House h){
    //     Optional<House> optionalHouse = houseRepository.findById(h.getHouseId());
    //     if (optionalHouse.isPresent()){
    //       House houseRecord = optionalHouse.get();
    //       System.out.println(houseRecord);
    //       houseRepository.delete(houseRecord);
    //       return "Deleted";
    //     }
    //     return "House not found";

    // }

    public House updateHouse(House s){
        Optional<House> optionalHouse = houseRepository.findById(s.getHouseId());
        if (optionalHouse.isPresent()){
          House houseRecord = optionalHouse.get();
        //   houseRecord.setHouseOwnerId(StringUtils.defaultIfBlank(s.getHouseOwnerId(), houseRecord.getHouseOwnerId()));
        //   houseRecord.setHouseName(StringUtils.defaultIfBlank(s.getHouseName(), houseRecord.getHouseName())); 

        //   houseRecord.setbhk(StringUtils.defaultIfBlank(s.getbhk(), houseRecord.getbhk()));
        //   houseRecord.setCity(StringUtils.defaultIfBlank(s.getCity(), houseRecord.getCity()));
        //   houseRecord.setState(StringUtils.defaultIfBlank(s.getState(), houseRecord.getState()));
        //   houseRecord.setPincode(StringUtils.defaultIfBlank(s.getPincode(), houseRecord.getPincode()));
        //   houseRecord.setAmenities(StringUtils.defaultIfBlank(s.getAmenities(), houseRecord.getAmenities()));
        //   houseRecord.setPic1(StringUtils.defaultIfBlank(s.getPic1(), houseRecord.getPic1()));
        //   houseRecord.setPic2(StringUtils.defaultIfBlank(s.getPic2(), houseRecord.getPic2()));
        //   houseRecord.setPic3(StringUtils.defaultIfBlank(s.getPic3(), houseRecord.getPic3()));
        //   houseRecord.setPic4(StringUtils.defaultIfBlank(s.getPic4(), houseRecord.getPic4()));
        //   houseRecord.setPic5(StringUtils.defaultIfBlank(s.getPic5(), houseRecord.getPic5()));
          houseRecord.setStatus(StringUtils.defaultIfBlank(s.getStatus(), houseRecord.getStatus()));
        //   houseRecord.setTotalSpace(StringUtils.defaultIfBlank(s.getTotalSpace(), houseRecord.getTotalSpace()));
        //   houseRecord.setHouseName(StringUtils.defaultIfBlank(s.getHouseName(), houseRecord.getHouseName()));
          return houseRepository.save(houseRecord);
        }
        else{
          return null;
        }
      }


    //     @Transactional
    //     public String deleteHouse(House houseId){
    //         HouseRepository.deleteByHouseId(houseId);
    //             // houses.stream().forEach(s -> {
    //             //     houseRepository.delete(s);
    //             // });
    //             return "House record deleted successfully.";
    // }

    public List<House_Details> getAllPendingRequests(){

        return (List<House_Details>)houseRepository.getHouseDetails();

                // List<House> houses = houseRepository.findByStatus("pending");
        // String house = "[";
            // houses.stream().forEach(h -> {
            //         House houseToBeReturn = houseRepository.findById(h.getHouseId()).get();
            //         house += "g";
            //         // System.out.print("{'" + userToBeReturn.getName() + "' : '" + userToBeReturn.getMobile() + "'}");
            //         // studentToBeUpdate.setName(student.getName());
            //         // studentToBeUpdate.setEmail(student.getEmail());
            //         // studentRepository.save(studentToBeUpdate);
            //     });

        // return (List<House>)houseRepository.findByStatus("pending");

    }

    public List<House_Details> getMyReservation(Integer r){
      System.out.println("Type of PGID: "+ r.getClass().getName());
      return (List<House_Details>)houseRepository.getMyReservation(r); 
    }

    public void cancelReservation(Integer house_id, Integer pg_id){
      // if(reservationRepository.existsByHouseId(house_id)){
      //   if(reservationRepository.existsByPgId(pg_id)){

      //   }
      // }
      reservationRepository.cancelReservation(house_id, pg_id);
    }


    public String deleteHouseById(Integer houseId) {
        houseRepository.deleteById(houseId);
        return "House Deleted Successfully!!!";
    }

    
    // String permissible_gender, String bhk, String amenities, Double rent_amount, Integer available_space,String city
    public List<House> getAvailableHouse(House h){

        // System.out.println(h.getPermissibleGender() + h.getbhk() + h.getAmenities() + h.getRentAmount() + h.getAvailableSpace() + h.getCity());
        System.out.println("Avail space :"+h.getAvailableSpace());
        
        System.out.println(houseRepository.getAvailableHouses(h.getPermissibleGender(),h.getbhk(),h.getAmenities(),h.getRentAmount(),h.getAvailableSpace(),h.getCity()));
        return (List<House>)houseRepository.getAvailableHouses(h.getPermissibleGender(),h.getbhk(),h.getAmenities(),h.getRentAmount(),h.getAvailableSpace(),h.getCity());
    }
    
}


