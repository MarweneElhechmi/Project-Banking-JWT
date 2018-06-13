package tn.biat.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import tn.biat.model.Operation;


public interface IOperationRepository extends JpaRepository<Operation, Long> {

}
