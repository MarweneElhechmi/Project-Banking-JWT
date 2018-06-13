package tn.biat.repository;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import tn.biat.model.Compte;


public interface ICompteRepository extends JpaRepository<Compte, String> {

    // Step 2

    List<Compte> findBySoldeIsLessThanEqual(BigDecimal valeur);

    List<Compte> findByProprietaireIsLike(String pattern);

    // Step 3
    @Query("select c from Compte c where c.solde <= ?1")
    List<Compte> findBySoldeInferieurA(BigDecimal valeur);

    @Query("select c from Compte c where c.proprietaire like :x")
    List<Compte> findByProprietaireComme(@Param("x") String pattern);

//	@Override
//	default Page<Compte> findAll(Pageable pageable) {
//		return findAll(PageRequest.of(1,5));
//	}
}
